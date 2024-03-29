<?php

namespace App\Models;

class User
{
    private $username;
    private $password;

    public function getUsername() {
        return $this->username;
    }

    public function setUsername($username): void {
        $this->username = $username;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password): void {
        $this->password = $password;
    }
}