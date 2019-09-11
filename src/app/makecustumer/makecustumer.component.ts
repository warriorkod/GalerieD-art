import { Component, OnInit } from '@angular/core';
  import { ApiService } from 'src/services/apiservice.service';
import { environment } from '../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';






@Component({
  selector: 'app-makecustumer',
  templateUrl: './makecustumer.component.html',
  styleUrls: ['./makecustumer.component.css']
})
export class MakecustumerComponent implements OnInit {
  jsonFormObject: any;
  countries: any;
  ville = [];
  localityByCountry:any;
  customerForm: FormGroup;
  customerFormErrors = {
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    pays: '',
    date_naissance: ''
  };

  formErrors = {
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    pays: '',
    date_naissance: ''
  };

  validationMessages = {
    civilite: {
      required: 'La civilité est obligatoire.'
    },
    nom: {
      required: 'Le nom est obligatoire.'
    },
    prenom: {
      required: 'Le prénom est obligatoire.'
    },
    email: {
      required: `L'email est obligatoire.`
    },
    pays: {
      required: `Le pays est obligatoire.`
    },
    telephone: {
      required: `Le téléphone est obligatoire.`
    },
    date_naissance: {
      required: `La date de naissance est obligatoire.`
    }
  };


  constructor( private apiservice: ApiService) {
    this.buildCustomerForm();
   }

  ngOnInit() {
    this.apiservice.getRequest(environment.SERVER_URL).subscribe(value => {
                this.countries = value;
            });
  }

  submitForm(data) {


  }
  buildCustomerForm() {
    this.customerForm = new FormGroup({
      civilite: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      pays: new FormControl('', Validators.required),
      date_naissance: new FormControl('', Validators.required),
      telephone:  new FormControl('', Validators.required),
      ville: new FormControl(''),
      rue: new FormControl(''),
      numero: new FormControl(''),
      code_postal: new FormControl(''),
    });
    this.customerForm.valueChanges.subscribe(data =>
      this.onValueChanged(data)
    );
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.customerForm) {
      return;
    }
    const form = this.customerForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        } 
      }
    }
  }

  onCreateNewCustomer(customer){
    console.log(customer);
    let flag = false;
    if (customer.civilite == '') {
      this.formErrors['civilite'] = this.validationMessages['civilite'].required;
      flag = true;
    }
    if (customer.prenom == '') {
      this.formErrors['prenom'] = this.validationMessages['prenom'].required;
      flag = true;
    }
    if (customer.nom == '') {
      this.formErrors['nom'] = this.validationMessages['nom'].required;
      flag = true;
    }
    if (customer.email == '') {
      this.formErrors['email'] = this.validationMessages['email'].required;
      flag = true;
    }
    if (customer.pays == '') {
      this.formErrors['pays'] = this.validationMessages['pays'].required;
      flag = true;
    }
    if (customer.telephone == '') {
      this.formErrors['telephone'] = this.validationMessages['telephone'].required;
      flag = true;
    }
    if (flag) {
      return;
    }else{
      this.apiservice.postRequest(environment.SERVER_URL1, customer).subscribe(
        (res)=>{
          // console.log('success');
          alert('Client enregistré avec succés !');
        },
        err=>{
          console.log(" Error..");
        }
    );;
    }
  }

  onChangePays(customerForm){

  }

}
