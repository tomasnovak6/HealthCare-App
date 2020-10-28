import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  getHelloMessage(applicationName: string): string {
    return 'Hello ' + applicationName;
  }

}
