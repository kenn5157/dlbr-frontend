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

  name = '';
  size = 0;
  crop = '';

  sendRequest() {
    let field = new Field(
      0, this.name, this.size, this.crop, 'status'
    );

    this.fieldService.addField(field).subscribe((newField) => {
      console.log('New field created:', newField);
      this.getFields();
      this.clearFields();
    });
  }

  clearFields() {
    this.name = '';
    this.size = 0;
    this.crop = '';
  }
}
