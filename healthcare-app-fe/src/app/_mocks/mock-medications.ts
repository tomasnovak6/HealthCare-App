import { IMedication } from '../_interfaces/imedication';
import { ITableCol } from '../_interfaces/itablecol';

export const MEDICATION_TABLECOLS: ITableCol[] = [
  {field: 'name', header: 'Jméno'},
  {field: 'dosageValue', header: 'Dávkování - hodnota'},
  {field: 'dosageUnit', header: 'Dávkování - jednotky'},
  {field: 'timePeriodFrom', header: 'Začátek medikace'},
  {field: 'timePeriodTo', header: 'Konec medikace'},
  {field: 'periodicity', header: 'Periodicita'}
];

export const MEDICATIONS: IMedication[] = [
  {
    "id": 1,
    "name": "Minocyklin",
    "dosageValue": 100,
    "dosageUnit": "mg",
    "timePeriodFrom": "1.11.2020",
    "timePeriodTo": "30.11.2020",
    "periodicity": "1-0-1"
  },
  {
    "id": 2,
    "name": "APP plus",
    "dosageValue": 500,
    "dosageUnit": "mg",
    "timePeriodFrom": "1.11.2020",
    "timePeriodTo": "30.11.2020",
    "periodicity": "1-0-1"
  },
  {
    "id": 3,
    "name": "Vitamín C",
    "dosageValue": 500,
    "dosageUnit": "mg",
    "timePeriodFrom": "1.11.2020",
    "timePeriodTo": "30.11.2020",
    "periodicity": "1-0-1"
  },
  {
    "id": 4,
    "name": "Vitamín D",
    "dosageValue": 5000,
    "dosageUnit": "IU",
    "timePeriodFrom": "1.11.2020",
    "timePeriodTo": "30.11.2020",
    "periodicity": "1-0-0"
  }
];
