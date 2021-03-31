import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() searchTerm = '';
  @Input() booksArr: any = [];
  @Output() informParent = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnChanges() {
    console.log("childComponent - ngonchanges called.....");
  }

  subs: any;
  ngOnInit(): void {
    this.subs = this.appService.counterSource.subscribe((data) => {
      console.log("Data received for Subject in ChildComponent: ", data);
      this.subs.unsubscribe();
    });
  }

  onRowClick(book: any) {
    this.informParent.emit(book);
  }

}
