<?php
// Handles the contact form using Post/Redirect/Get. Must run before any output.

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_POST['save'])) {
    return;
}

$redirect = 'index.php#contact';

// Honeypot: bots fill hidden fields. Pretend success, send nothing.
if (!empty($_POST['website'])) {
    $_SESSION['contact_status'] = 'sent';
    header('Location: ' . $redirect, true, 303);
    exit;
}

$clean = static function ($value, int $max): string {
    $value = trim(str_replace(["\r", "\n"], ' ', (string) $value));
    return mb_substr($value, 0, $max);
};

$name    = $clean($_POST['name'] ?? '', 100);
$subject = $clean($_POST['subject'] ?? '', 150);
$email   = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$message = mb_substr(trim((string) ($_POST['message'] ?? '')), 0, 5000);

$errors = [];
if (!hash_equals($_SESSION['csrf'], (string) ($_POST['csrf'] ?? ''))) {
    $errors[] = 'Your session has expired. Please try again.';
}
if (mb_strlen($name) < 2) {
    $errors[] = 'Please enter your name.';
}
if ($email === false) {
    $errors[] = 'Please enter a valid email address.';
}
if (mb_strlen($subject) < 3) {
    $errors[] = 'Please enter a subject.';
}
if (mb_strlen($message) < 10) {
    $errors[] = 'Please write a message of at least 10 characters.';
}

if ($errors) {
    $_SESSION['contact_errors'] = $errors;
    $_SESSION['contact_old'] = [
        'name'    => $name,
        'email'   => (string) ($_POST['email'] ?? ''),
        'subject' => $subject,
        'message' => $message,
    ];
    header('Location: ' . $redirect, true, 303);
    exit;
}

$body = "Name: {$name}\r\nEmail: {$email}\r\n\r\nMessage:\r\n{$message}\r\n";

$headers = implode("\r\n", [
    'From: VBC Limited Website <no-reply@vbclimited.com>',
    'Reply-To: ' . $email,
    'Cc: kvishwanath0551@gmail.com',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

$encodedSubject = '=?UTF-8?B?' . base64_encode('[Website] ' . $subject) . '?=';

$_SESSION['contact_status'] = mail(VBC_EMAIL, $encodedSubject, $body, $headers) ? 'sent' : 'failed';
$_SESSION['csrf'] = bin2hex(random_bytes(32));

header('Location: ' . $redirect, true, 303);
exit;
