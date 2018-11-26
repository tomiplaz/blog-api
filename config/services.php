<?php

return [
    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN', 'domain'),
        'secret' => env('MAILGUN_KEY', 'secret'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],
];
