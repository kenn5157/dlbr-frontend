import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldsComponent } from './components/fields/fields.component';
import { MessagesComponent } from './components/messages/messages.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FieldsFormComponent } from './components/fields-form/fields-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    MessagesComponent,
    JobsComponent,
    FieldsFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
