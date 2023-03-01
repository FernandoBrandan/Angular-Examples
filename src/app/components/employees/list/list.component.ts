import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
//faltaba en tsconfig.json "compilerOptions":"skipLibCheck": true,
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent  implements OnInit{

  //Ejemplo firebase
  //items: Observable<any[]>;
  //this.items = firestone.collection('items').valueChanges();
  
  constructor(private _empleadoService:  EmployeeService,
              private toastr: ToastrService
    ) {    

  }
  
  ngOnInit(): void {
    this.getEmpleados()
  }
  
  empleados: any[] = []
  getEmpleados(){
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = []
      data.forEach((element:any) => {
        // console.log(element.payload.doc.id)
        // console.log(element.payload.doc.data())
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data() 
        })
      }); 
    })
  }

  eliminarEmpleado(id: string){
    this._empleadoService.eliminarEmpleados(id).then(()=>{
      console.log('eliminado!!')
      this.toastr.error('Empleado eliminado!!', 'Eliminado Correctamente', {
        positionClass: 'toast-bottom-right'
      })  
    }).catch(error => {
      console.log(error)
    })
  }
}

 