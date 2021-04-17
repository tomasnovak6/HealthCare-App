<?php


class Index {

    public function __construct() {
        $this->testEcho();
    }

    private function testEcho() {
        echo 'HealthCare-App BE';
    }

}

$index = new Index();