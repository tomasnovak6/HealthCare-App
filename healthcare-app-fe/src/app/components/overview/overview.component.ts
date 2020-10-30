import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  openQuestionareClick(): void {
    // console.log('openQuestionare');
    this.router.navigateByUrl('/questionare');
  }

}
