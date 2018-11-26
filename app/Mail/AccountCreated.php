<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use App\User;

class AccountCreated extends Mailable
{
    const SUBJECT = 'Please confirm your account';
    const VIEW = 'emails.account-created';

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
