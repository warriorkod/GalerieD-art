import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from "rxjs";
import { customer } from 'src/models/customer';
import { environment } from '../../environments/environment';
import { ApiService } from 'src/services/apiservice.service';


@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  subscription: any;
  customers: customer[];
  constructor( private apiservice: ApiService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      retrieve: true,
      paging: true,
      info: true
    };
    this.apiservice.getRequest(environment.SERVER_URL1, false).subscribe(value => {
      this.customers = value['content'];
      this.dtTrigger.next();
  }); 
  }
}
