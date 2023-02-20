import { Component } from '@angular/core';
import { Field } from 'src/assets/field';

@Component({
  selector: 'app-fields-form',
  templateUrl: './fields-form.component.html',
  styleUrls: ['./fields-form.component.css']
})
export class FieldsFormComponent {

  model = new Field(0, 'M01', 32, 'grass', 'grazing')

  submitted = false;

  onSubmit() { this.submitted = true; }
}
