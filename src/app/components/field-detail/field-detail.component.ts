import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FieldService } from 'src/app/services/field.service';
import { Field } from 'src/assets/field';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent {
  constructor(
    private fieldService: FieldService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  @Input() field?: Field;

  ngOnInit(): void {
    this.getField();
  }

  getField(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fieldService.getField(id)
      .subscribe(field => this.field = field);
  }

  goBack() {
    this.location.back();
  }
  save() {
    if (this.field) {
      this.fieldService.updateField(8, this.field)
      .subscribe(() => this.goBack);
    }
  }


}
