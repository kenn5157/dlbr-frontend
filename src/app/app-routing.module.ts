import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FieldsComponent } from './components/fields/fields.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FieldDetailComponent } from './components/field-detail/field-detail.component';

const routes: Routes = [
  { path: `home`, component: DashboardComponent},
  { path: `field`, component: FieldsComponent},
  { path: `jobs`, component: JobsComponent },
  { path: `field-detail/:id`, component: FieldDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
