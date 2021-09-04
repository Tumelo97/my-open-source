import { NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ServicesModule } from './services/services.module';
import { HomeModule } from './home/home.module';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { RouterModule } from '@angular/router';
import { PourlorhomeComponent } from './pourlorhome/pourlorhome.component';
import { SignupComponent } from './signup/signup.component';
import { EmailreminderComponent } from './emailreminder/emailreminder.component';
import { RemberpasswordComponent } from './remberpassword/remberpassword.component';



const rootRouting: ModuleWithProviders<AppModule> = RouterModule.forRoot([
  { path: '',
    pathMatch: 'full',
    redirectTo: 'home' },
], { useHash: false, relativeLinkResolution: 'legacy' });


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LoginComponent,
    TermsandconditionsComponent,
    PourlorhomeComponent,
    SignupComponent,
    EmailreminderComponent,
    RemberpasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
