<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/core/app-skeleton.php';

class MedicationList {

    public function __construct() {
        $this->getList();
    }

    private function getList() {
        $medication = [];

        $select = dibi::select('id, name, dosage_value, dosage_units')
            ->from(TB_MEDICATION)
            ->fetchAll();
        $cr = 0;

        if ($select) {
            foreach($select as $row) {
                $medication[$cr]['id'] = $row['id'];
                $medication[$cr]['name'] = $row['name'];
                $medication[$cr]['dosage_value'] = $row['dosage_value'];
                $medication[$cr]['dosage_units'] = $row['dosage_units'];

                $cr++;
            }

            echo json_encode(['data' => $medication]);
        } else {
            return http_response_code(404);
        }
    }

}

$medicationList = new MedicationList();