import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createEmpleado: FormGroup;
  submite = false;
  loading: boolean = false; 
  id: string | null;
  titulo: string = 'Agregar Empleado';
 

  constructor(
    private fb: FormBuilder,
    private _empleadoService: EmployeeService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
  ) {
    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      salario: ['', Validators.required],
    });

    this.id = this.aRoute.snapshot.paramMap.get('id') 
  }

  ngOnInit(): void {
    this.esEditarEmpleado()
  }
 
  agregarEmpleado() {
    this.submite = true;
    if (this.createEmpleado.invalid) {
      return;
    }

    const empleado = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      documento: this.createEmpleado.value.documento,
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaMod: new Date(),
    } 

    this.loading = true
    this._empleadoService.agregarEmpleado(empleado).then(() => {
          this.toastr.success('Empleado registrado!!', 'Correctamente', {
            positionClass: 'toast-bottom-right'
          })  
          this.router.navigate(['/list-empleados'])        
      })
      .catch((error) => console.log(error));
  }

  agregarEditarEmpleado(){
    this.submite = true;
    if (this.createEmpleado.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarEmpleado()
    }else{
      this.editarEmpleado(this.id)
    }
  }

  editarEmpleado(id: string){

    const empleado = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      documento: this.createEmpleado.value.documento,
      salario: this.createEmpleado.value.salario, 
      fechaMod: new Date(),
    } 

    this.loading = true
    this._empleadoService.actualizarEmpleado(id, empleado).then(() => {
      this.loading = false;
      this.toastr.info('Empleado actualizado!!', 'Correctamente', {
        positionClass: 'toast-bottom-right'
      })  
      this.router.navigate(['/list-empleados'])        
    })
  }

  esEditarEmpleado(){
    if(this.id !== null){
      this.loading = true 
      this.titulo = 'Editar empleado';
      this._empleadoService.getEmpleado(this.id).subscribe(data => {
      this.loading = false 
        this.createEmpleado.setValue({
          nombre : data.payload.data()['nombre'],
          apellido : data.payload.data()['apellido'],
          documento : data.payload.data()['documento'],
          salario : data.payload.data()['salario'],
        })
      })
    }
  }
}
