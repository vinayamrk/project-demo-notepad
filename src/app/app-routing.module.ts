import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import {DeveloperComponent} from './developer/developer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  { path:'Login', component:LoginComponent},
  { path:'Register', component:RegistrationComponent},
  { path: '', component: HomeComponent} ,
  { path:'details',component:DeveloperComponent} ,
  { path: 'new', component: NoteDetailsComponent}, 
  { path: ':id', component: NoteDetailsComponent} 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
