import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
 

//routing
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module'; 

//Componentes
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
/** */
import { ListComponent } from './components/employees/list/list.component';
import { CreateComponent } from './components/employees/create/create.component';
import { NavbarComponent } from './components/employees/navbar/navbar.component'; 
import { environment } from 'src/environments/environment.development';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DragdropComponent,
    ListComponent,
    CreateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //TableComponent - DragdropComponent
    ScrollingModule, //TableComponent
    DragDropModule,   //DragdropComponent
    CommonModule,  
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),     
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
