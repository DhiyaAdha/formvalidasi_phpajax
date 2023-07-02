<?php

$errors = [];
$data = [];

// Memeriksa apakah field 'name' kosong
if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

// Memeriksa apakah field 'email' kosong
if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required.';
}

// Memeriksa apakah field 'superheroAlias' kosong
if (empty($_POST['superheroAlias'])) {
    $errors['superheroAlias'] = 'Superhero alias is required.';
}

// Memeriksa apakah terdapat error
if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

// Mengirimkan response dalam format JSON
echo json_encode($data);
