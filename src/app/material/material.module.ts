import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatChip,
  MatChipsModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class MaterialModule { }
