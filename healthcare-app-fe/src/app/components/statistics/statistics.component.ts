import { Component, OnInit } from '@angular/core';

import { HealthConditionService } from '../../_services/health-condition.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  // todo: casem vyhodit to any
  dataRadar: any;
  dataLine: any;

  shownGraph: string = 'line';
  btnClass: object = {
    'line': 'btn-primary',
    'radar': 'btn-outline-primary'
  };

  constructor(
    private healthConditionService: HealthConditionService
  ) { }

  ngOnInit() {

    this.dataLine = {
      // todo: doresit i18n a vubec nejak tu casovou radu
      labels: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec'],
      datasets: [
        {
          label: 'Stav pacienta',
          data: [28, 48, 40, 52, 75, 78, 100],
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
        }
      ]
    };

    this.dataRadar = {
      // todo: doresit i18n a vubec nejak tu casovou radu
      labels: ['Vedlejší účinky', 'Bolest', 'Únava', 'Spánek', 'Kožní problémy', 'Zažívací problémy', 'Jiné problémy'],
      datasets: [
        {
          label: 'Stav pacienta',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 52, 75, 78, 100],
        }
      ]
    };
  }

  switchChartClick(chart: string) {
    this.shownGraph = chart;

    if (chart === 'line') {
      this.btnClass['line'] = 'btn-primary';
      this.btnClass['radar'] = 'btn-outline-primary';
    } else if (chart === 'radar') {
      this.btnClass['line'] = 'btn-outline-primary';
      this.btnClass['radar'] = 'btn-primary';
    }

  }

}
