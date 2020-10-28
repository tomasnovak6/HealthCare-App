import { Component, Input, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  @Input() applicationName: string;

  constructor(public helloService: HelloService) { }

  ngOnInit() {
    this.sayHello();
  }

  sayHello(): void {
    let result: string = this.helloService.getHelloMessage(this.applicationName);
    console.log(result);
  }
}





