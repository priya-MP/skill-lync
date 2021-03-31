import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp123';
  counter = 0;
  showState = "Hide";
  color = 'blue';
  bgColor = '';

  testStr = 'all are in lower case';
  testDt = new Date();
  testNum = 1123000.4567;
  testNum1 = 0.7;


  haveElem = true;
  booksArr = [
    { name: "Name1", q: 20 },
    { name: "Na2", q: 23 },
    { name: "N3", q: 42 }
  ];
  booksObj = {
    N1: 200,
    N2: 500,
    N3: 112
  };
  searchTerm = '';

  emotion = "confused";

  IncrementVal() {
    this.counter++;
  }

  showHide() {
    this.showState = this.showState == 'Show' ? 'Hide' : 'Show';
    this.haveElem = !this.haveElem;
  }

  changeColor() {
    this.color = this.color == "blue" ? "red" : "blue";
    this.booksArr.push({ name: "N4", q: 20 });
  }
  receiveColor(color: string) {
    console.log("receiveColor......", color);
  }

  passColor = '';
  passStr = '';
  passwordStr = "";

  validatePassword() {
    console.log(this.passwordStr);
    if (this.passwordStr.length < 5) {
      this.passColor = 'red';
      this.passStr = 'poor';
    } else if (this.passwordStr.length < 10) {
      this.passColor = 'pink';
      this.passStr = 'medium';
    } else {
      this.passColor = 'green';
      this.passStr = 'good';
    }

  }

  constructor(private router: Router, private appService: AppService) { }
  navigateMe() {
    this.appService.setwelcomeStr("Am navigation.....");
    var val = Number(prompt("Enter the number"));
    if (val == 0) {
      return;
    }
    if (val < 0) {
      this.router.navigate(["/sales"]);
    } else {
      this.router.navigate(["/products"]);
    }
  }

  receiveBook(bookVal:any) {
    console.log("Book val received in parent.....", bookVal);
  }

  incrCounter() {
    this.counter++;
    this.appService.setCounterSource(this.counter);
  }
}

