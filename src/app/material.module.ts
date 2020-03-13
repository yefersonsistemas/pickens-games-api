import { NgModule } from '@angular/core';
import {
  MatTableModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatListModule,
  MatProgressBarModule

} from '@angular/material';


@NgModule({
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule {}
