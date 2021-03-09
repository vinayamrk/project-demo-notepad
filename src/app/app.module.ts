import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteCardsComponent } from './note-cards/note-cards.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
 import { AngularFirestoreModule } from '@angular/fire/firestore';
 import { environment } from '../environments/environment';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteDetailsComponent,
    NoteCardsComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    DragDropModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
         AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
