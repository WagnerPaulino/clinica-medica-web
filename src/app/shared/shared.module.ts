import { DashboardComponent } from './../view/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSnackBarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ANGULAR_MATERIAL = [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatDatepickerModule,
    MatMomentDateModule
];

const ANGULAR = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: [
    ANGULAR_MATERIAL,
    ANGULAR
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    ANGULAR_MATERIAL,
    ANGULAR,
    DashboardComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ]
})
export class SharedModule { }
