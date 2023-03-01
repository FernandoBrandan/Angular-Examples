import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Se utiliza para comunicar con backend, reutilizar codigo, comunicar entre componentes
export class EmployeeService {

  constructor(private firestore: AngularFirestore) { }

  agregarEmpleado(emplado: any): Promise<any> {
    return this.firestore.collection('empleados').add(emplado);
  }

  getEmpleados(): Observable<any>{ 
    return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges()
  }

  eliminarEmpleados(id: string): Promise<any>{
    return this.firestore.collection('empleados').doc(id).delete()
  }

  getEmpleado(id: string): Observable<any>{
    return this.firestore.collection('empleados').doc(id).snapshotChanges()
  }

  actualizarEmpleado(id: string, data:any): Promise<any> {
    return this.firestore.collection('empleados').doc(id).update(data)
  }
}
 
