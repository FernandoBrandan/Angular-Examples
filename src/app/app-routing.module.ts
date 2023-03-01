import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/employees/list/list.component';
import { CreateComponent } from './components/employees/create/create.component';

const routes: Routes = [
  {    path: '', redirectTo: 'list-empleados', pathMatch: 'full'  },
  {    path: 'list-empleados', component: ListComponent  },
  {    path: 'list-empleados', component: ListComponent  },
  {    path: 'create-empleados', component: CreateComponent  },
  {    path: 'edit-empleado/:id', component: CreateComponent  },
  {    path: '**', redirectTo: 'list-empleados', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
