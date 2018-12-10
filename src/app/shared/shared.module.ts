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
  MAT_DATE_LOCALE,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatBadgeModule,
  MatCardModule,
  MatExpansionModule,
  MatTableModule,
  MatTooltipModule} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const NGXCHARTSMODULES = [
  NgxChartsModule
];

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
    MatMomentDateModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule
];

const ANGULAR = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  BrowserAnimationsModule
];
  const COMPONENTS = [
    DashboardComponent
  ];

@NgModule({
  imports: [
    ANGULAR_MATERIAL,
    ANGULAR,
    NGXCHARTSMODULES
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    ANGULAR_MATERIAL,
    ANGULAR,
    COMPONENTS,
    NGXCHARTSMODULES
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ]
})
export class SharedModule { }
