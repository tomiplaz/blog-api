<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\User as UserModel;
use App\ConfirmationToken as ConfirmationTokenModel;
use App\Mail\AccountCreated;

class UserController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        UserModel $userModel,
        ConfirmationTokenModel $confirmationTokenModel
    )
    {
        $this->userModel = $userModel;
        $this->confirmationTokenModel = $confirmationTokenModel;
        $this->db = app('db');
    }

    /**
     * Get all users.
     *
     * @return \Illuminate\Database\Eloquent\Collection All users.
     */
    public function all() {
        return $this->userModel
            ->withCount(['posts', 'comments'])
            ->get();
    }

    /**
     * Get a single user.
     *
     * @param string $stringId User's string Id.
     *
     * @return \App\User|null Requested user (if any) or null.
     */
    public function one(string $stringId) {
        return $this->userModel
            ->withCount(['posts', 'comments'])
            ->where(['string_id' => $stringId])
            ->first();
    }

    /**
     * Create a user.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \App\User|\Illuminate\Http\JsonResponse Created user or error response.
     */
    public function create(Request $request) {
        try {
            $this->validate($request, [
                'name' => 'required|string|min:2|max:20',
                'email' => 'required|email|max:100|unique:users',
                'password' => 'required|string|min:8|max:255'
            ]);

            $this->db->beginTransaction();

            $user = $this->userModel->create($request->only(['name', 'email', 'password']));
            $confirmationToken = $user->confirmationToken()->create([]);

            Mail::send(new AccountCreated($user, $confirmationToken->token));

            $this->db->commit();

            return $user;
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $this->db->rollback();
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }

    /**
     * Update a user.
     *
     * @param int $id User's ID.
     * @param \Illuminate\Http\Request
     *
     * @return \App\User|\Illuminate\Http\JsonResponse Updated user or error response.
     */
    public function update(int $id, Request $request) {
        try {
            $this->validate($request, [
                'website' => 'string|min:3|max:255',
                'about' => 'string|min:2|max:1000',
            ]);

            $user = $this->userModel->find($id);

            $user->update($request->only(['website', 'about']));

            return $user->fresh();
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }

    /**
     * Confirm an account.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \Illuminate\View\View|\Illuminate\Http\JsonResponse Index view or error response.
     */
    public function confirmAccount(Request $request) {
        try {
            $this->validate($request, [
                'token' => 'required|string|exists:confirmation_tokens,token',
            ]);

            $this->db->beginTransaction();

            $confirmationToken = $this->confirmationTokenModel
                ->where('token', $request->get('token'))
                ->first();

            $confirmationToken->user->is_confirmed = true;
            $confirmationToken->user->save();

            $confirmationToken->delete();

            $this->db->commit();

            return redirect('');
        } catch (Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $this->db->rollback();
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }

    /**
     * Change user's password.
     *
     * @param int $id User's ID.
     * @param \Illuminate\Http\Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePassword(int $id, Request $request) {
        try {
            $this->validate($request, [
                'currentPassword' => 'required|string',
                'newPassword' => 'required|string|min:8|max:255',
            ]);

            $user = $this->userModel->find($id);
            $credentials = [
                'name' => $user->name,
                'password' => $request->get('currentPassword'),
            ];

            if ($token = app('auth')->attempt($credentials)) {
                $user->update([
                    'password' => $request->get('newPassword'),
                ]);
                return response()->json(compact('token'));
            }

            throw new \Exception('Invalid password! Please try again.');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
