import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { WorkerComponent } from './component/worker/worker.component';
import { WorkerDetailsComponent } from './component/worker-details/worker-details.component';
import { WorkerFormComponent } from './component/admin/worker-form/worker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    WorkerComponent,
    WorkerDetailsComponent,
    WorkerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path: 'home ', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'worker', component: WorkerComponent },
      { path: 'worker-details', component: WorkerDetailsComponent },
      { path: 'worker-form', component: WorkerFormComponent },
      {
        path: '', redirectTo: '/signin', pathMatch: 'full'
    }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
