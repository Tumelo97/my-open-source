import { NgModule,ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

const ConsultantRouting: ModuleWithProviders<HomeModule> = RouterModule.forChild([
  {
    path:'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: []
  },
 
]);


@NgModule({
  declarations: [
   
    HomeComponent,
  ], 
  imports: [
    BrowserModule,
    
  ],
  exports:[
    HomeComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
