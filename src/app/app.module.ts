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
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        FieldsComponent,
        MessagesComponent,
        JobsComponent,
        FieldsFormComponent,
        DashboardComponent,
        FieldsFormComponent,
        FormComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AppModule { }
