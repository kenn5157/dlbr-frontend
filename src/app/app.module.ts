import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FieldsComponent } from './components/fields/fields.component';
import { MessagesComponent } from './components/messages/messages.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FieldsFormComponent } from './components/fields-form/fields-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    MessagesComponent,
    JobsComponent,
    FieldsFormComponent,
    DashboardComponent,
    FieldsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
