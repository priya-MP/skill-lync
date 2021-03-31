import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  welcomeStr = '';

  constructor() { }

  getwelcomeStr() {
    return this.welcomeStr;
  }

  setwelcomeStr(str: string) {
    this.welcomeStr = str;
  }


  counterSource = new Subject();
  setCounterSource(val: any) {
    this.counterSource.next(val);
  }
}
