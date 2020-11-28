import { Component, OnInit } from '@angular/core';

import { HealthConditionService } from '../../_services/health-condition.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  shownGraph: string = 'line';
  btnClass: object = {
    'line': 'btn-primary',
    'radar': 'btn-outline-primary'
  };

  lineChart: any;
  radarChart: any;

  valueSummaryArr: number[] = [];
  timelineArr: string[] = [];
  valueByTypeArr: number[] = [];
  typeArr: string[] = [];

  constructor(
    private healthConditionService: HealthConditionService
  ) { }

  ngOnInit() {
    this.lineChart = this.getLineChart();
    this.radarChart = this.getRadarChart();
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

  setDataSummary() {
    this.healthConditionService.getHealthConditionsSummary()
      .subscribe(items => {
        items.map((item, i) => {
          this.valueSummaryArr[i] = item.valueSummary;
          this.timelineArr[i] = item.date;
        });
      });
  }

  getLineChart() {
    this.setDataSummary();

    let lineChart = {
      labels: this.timelineArr,
      datasets: [
        {
          label: 'Stav pacienta',
          data: this.valueSummaryArr,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
        }
      ]
    };

    return lineChart;
  }

  setDataByType() {
    this.healthConditionService.getHealthConditionsByType()
      .subscribe(items => {
        items.map((item, i) => {
          this.valueByTypeArr[i] = item.value;
          this.typeArr[i] = item.type;
        });
      });
  }

  getRadarChart() {
    this.setDataByType();

    let radarChart = {
      labels: this.typeArr,
      datasets: [
        {
          label: 'Stav pacienta',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: this.valueByTypeArr,
        }
      ]
    };

    return radarChart;
  }

}
