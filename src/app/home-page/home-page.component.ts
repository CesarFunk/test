import { Component, OnInit } from '@angular/core';
//librerias que se agregaron
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
//*

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  //variable para validar formularios
  validatingForm: FormGroup;
  //se ingresa en el constructor
  constructor(private fb: FormBuilder) {
    //funcion sinonima para el atributo [form]
    this.validatingForm = fb.group({
      'email': [null, Validators.email]
      
      });
   }

  ngOnInit() {
  }

}
