import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from './app-routing.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ContentComponent } from './content/content.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,ComponentsModule,MaterialModule,FormsModule,ReactiveFormsModule
  ]
})
export class PagesModule { }
