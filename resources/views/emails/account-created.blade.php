<p>
    Dear {{ $user->name }},
</p>
<p>
    You have successfully created your <em>yabla</em> account!
</p>
<p>
    Please confirm your account by visiting the following link:<br>
    {{ env('APP_URL') }}/confirm-account?token={{ $token }}
</p>
