import { NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ServicesModule } from './services/services.module';
import { HomeModule } from './home/home.module';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { CologinComponent } from './signup_consultant.html/cologin.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { RouterModule } from '@angular/router';

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
    CologinComponent,
    TermsandconditionsComponent
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
