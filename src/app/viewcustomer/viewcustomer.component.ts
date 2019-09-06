import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";


@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      retrieve: true,
      paging: false,
      info: false
    };
  }

}
