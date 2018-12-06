<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use App\User;

class ForgotPassword extends Mailable
{
    const SUBJECT = 'Forgot your password?';
    const VIEW = 'emails.forgot-password';

    public $user, $token;

    public function __construct(User $user, string $token)
    {
        $this->user = $user;
        $this->token = $token;
    }

    public function build()
    {
        return $this
            ->to($this->user->email)
            ->subject(self::SUBJECT)
            ->view(self::VIEW);
    }
}
