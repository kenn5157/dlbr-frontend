import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { FieldService } from 'src/app/services/field.service';
import { Field } from 'src/assets/field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  constructor(private fieldService: FieldService) { }

  


}
