<p>
    Dear {{ $user->name }},
</p>
<p>
    It seems you forgot your password!
</p>
<p>
    You can reset your password by visiting the following link:<br>
    {{ env('APP_URL') }}/reset-password?token={{ $token }}
</p>
