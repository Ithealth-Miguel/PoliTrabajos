import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private _http:HttpClient) { }

  PostDatosPaciente(data:{}){
    return this._http.post(`${environment.urlApi}Pacientes`,data)
  }
  GetDatosPaciente(){
    return this._http.get(`${environment.urlApi}Pacientes`)
  }
  PutDatosPaciente(data:{},id:any){
    return this._http.put(`${environment.urlApi}Pacientes/${id}`,data)
  }
  DeleteDatosPaciente(id:any){
    return this._http.delete(`${environment.urlApi}Pacientes/${id}`)
  }
}
