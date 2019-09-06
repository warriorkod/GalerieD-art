import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-makecustumer',
  templateUrl: './makecustumer.component.html',
  styleUrls: ['./makecustumer.component.css']
})
export class MakecustumerComponent implements OnInit {
  jsonFormObject: any;

  constructor(private http: HttpClient
    ) { }

  ngOnInit() {
    const schemaURL = `../../assets/schemas/customer.json`;
    this.http.get(schemaURL, { responseType: 'text' })
      .subscribe(schema => {
        this.jsonFormObject = JSON.parse(schema);
      });
  }

  submitForm(data) {

  }

}
