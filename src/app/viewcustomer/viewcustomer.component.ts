import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from "rxjs";
import { customer } from 'src/models/customer';


@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  subscription: any;
  customers: customer[] = [
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},
    { "civilite": "Homme", "nom": "kane", "pays": "Sénégal", "prenom": "Abdoulaye", "date_naissance": "05/01/2019","email": "abdoulaye.kane093@gmail.com", "telephone": 776746649, "ville": "Dakar", "rue": "DADODO", "numero": 22, "code_postal": "BP626"},

  ];
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      retrieve: true,
      paging: true,
      info: true
    }; 
  }
}
