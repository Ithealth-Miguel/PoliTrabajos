import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private _http:HttpClient) { }

  PostDatosEmpleado(data:{}){
    return this._http.post(`${environment.urlApi}Empleados`,data)
  }
  GetDatosEmpleado(){
    return this._http.get(`${environment.urlApi}Empleados`)
  }
  PutDatosEmpleado(data:{},id:any){
    return this._http.put(`${environment.urlApi}Empleados/${id}`,data)
  }
  DeleteDatosEmpleado(id:any){
    return this._http.delete(`${environment.urlApi}Empleados/${id}`)
  }
}
