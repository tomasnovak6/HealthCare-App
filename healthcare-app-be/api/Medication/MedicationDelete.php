<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/core/app-skeleton.php';

class MedicationDelete {

    private $id;

    public function __construct($id) {
        $this->id = intval($id);
        $this->sqlDelete();
    }

    private function sqlDelete() {
        $delete = dibi::delete(TB_MEDICATION)->where('id=%i', $this->id)->execute();

        if ($delete) {
            return http_response_code(204);
        } else {
            return http_response_code(422);
        }
    }

}

$medicationDelete = new MedicationDelete($_GET['id']);