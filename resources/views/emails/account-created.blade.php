<p>
    Dear {{ $user->name }},
</p>
<p>
    You have successfully created your Blogging App account!
</p>
<p>
    Please confirm your account by visiting the following link:<br>
    {{ env('APP_URL') }}/api/v1/users/confirm-account?token={{ $token }}
</p>
