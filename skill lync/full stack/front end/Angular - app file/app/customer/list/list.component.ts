import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.callbackPattern();
    this.promisePattern().then(data => {
      console.log("Success in promise....", data);
      this.func1();
    }).catch(err => {
      console.log("Error in promise....", err);
    })
    this.testAsyncAwait();
  }

  callbackPattern() {
    setTimeout(() => {
      console.log("Inside setTimeout 1");
      this.func1();
    }, 3000)
  }

  promisePattern() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Inside setTimeout 2");
        resolve(true)
      },3000)
    })
  }

  async testAsyncAwait() {
    await this.promisePattern();
    console.log("Inside testAsyncAwait")
    this.func1();
  }

  func1() {
    console.log("Function 1 called....")
  }

}
