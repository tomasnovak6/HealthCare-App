import { IMedication } from '../_interfaces/imedication';
import { ITableCol } from '../_interfaces/itablecol';

export const MEDICATION_TABLECOLS: ITableCol[] = [
  {field: 'name', header: 'Jméno'},
  {field: 'dosageValue', header: 'Dávkování - hodnota'},
  {field: 'dosageUnit', header: 'Dávkování - jednotky'},
  {field: 'periodicity', header: 'Periodicita'}
  // {field: 'updateAction', header: 'Editovat'},
  // {field: 'deleteAction', header: 'Smazat'}
];

export const MEDICATIONS: IMedication[] = [
  {
    "id": 1,
    "name": "Minocyklin",
    "dosageValue": 100,
    "dosageUnit": "mg",
    "periodicity": "1-0-1"
  },
  {
    "id": 2,
    "name": "APP plus",
    "dosageValue": 500,
    "dosageUnit": "mg",
    "periodicity": "1-0-1"
  },
  {
    "id": 3,
    "name": "Vitamín C",
    "dosageValue": 500,
    "dosageUnit": "mg",
    "periodicity": "1-0-1"
  },
  {
    "id": 4,
    "name": "Vitamín D",
    "dosageValue": 5000,
    "dosageUnit": "IU",
    "periodicity": "1-0-0"
  }
];
