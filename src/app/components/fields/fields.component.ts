import { Component } from '@angular/core';

import { FieldService } from 'src/app/services/field.service';
import { Field } from 'src/assets/field';


@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})

export class FieldsComponent {
  
  constructor(private fieldService: FieldService) { }

  fields: Field[] = [];

  ngOnInit(): void {
    this.getFields();
  }

  getFields(): void {
    this.fieldService.getFields()
      .subscribe(fields => this.fields = fields);
  }
}
