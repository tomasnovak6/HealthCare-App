<?php

require_once '../vendor/autoload.php';

class DbConnect {

    public function __construct() {
        $this->connect();
    }

    private function connect() {
        try {
            $data = array(
                'driver'   => 'mysqli',
                'host'     => 'localhost',
                'username' => 'root',
                'password' => '',
                'database' => 'healthcare_app',
                'charset'  => 'utf8',
            );

            ini_set('display_errors', '1');

            dibi::connect($data);
        } catch(\Dibi\Exception $e) {
            echo get_class($e), ': ', $e->getMessage(), "\n";
        }
    }

}