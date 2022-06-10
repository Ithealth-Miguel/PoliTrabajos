import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente/paciente.service';

@Component({
  selector: 'app-prueba-z',
  templateUrl: './prueba-z.component.html',
  styleUrls: ['./prueba-z.component.scss']
})
export class PruebaZComponent implements OnInit {

  listaPacientes:any[]=[];

  editar:boolean = false;
  id:any;

  myform:FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(2)]],
    apellido: ['',[Validators.required,Validators.minLength(2)]],
    direccion: ['',[Validators.required,Validators.minLength(2)]],
    genero: ['',[Validators.required,Validators.minLength(1)]],
    edad: ['',[Validators.required,Validators.minLength(1)]],
    estadoCivil: ['',[Validators.required,Validators.minLength(2)]],
    email: ['',[Validators.required,Validators.minLength(2)]],
    cantidadHijos: ['',[Validators.required]],
    documento: ['',[Validators.required,Validators.minLength(2)]]
  })
  constructor(private fb:FormBuilder,private pacienteService:PacienteService) { }

  ngOnInit(): void {
    this.listarDatos();
  }

  guardarDatos(){
    if(this.myform.invalid){
      alert("Rellene todos los campos")
      return 
    }
    this.pacienteService.PostDatosPaciente(this.myform.value)
        .subscribe(resp =>{
          this.listarDatos();
          this.myform.reset();
          alert("Datos Guardados !")
        },err=>{
          console.log(err);
          
        })
  }

  listarDatos(){
    this.pacienteService.GetDatosPaciente()
        .subscribe((resp:any) =>{
          console.log(resp);
          this.listaPacientes = resp;
        },err=>{

        })
  }

  capturarDatos(item:any){
    this.id = item.id ;
    this.myform.get('nombre')?.setValue(item.nombre)
    this.myform.get('apellido')?.setValue(item.apellido)
    this.myform.get('direccion')?.setValue(item.direccion)
    this.myform.get('genero')?.setValue(item.genero)
    this.myform.get('edad')?.setValue(item.edad)
    this.myform.get('estadoCivil')?.setValue(item.estadoCivil)
    this.myform.get('email')?.setValue(item.email)
    this.myform.get('cantidadHijos')?.setValue(item.cantidadHijos)
    this.myform.get('documento')?.setValue(item.documento)
  }

  EditarDatos(){

    if(this.myform.invalid){
      alert("Rellene todos los campos")
      console.log(this.myform.value);
      
      return 
    }

    let data = {
      id:this.id,
      nombre: this.myform.get('nombre')?.value,
      apellido: this.myform.get('apellido')?.value,
      direccion: this.myform.get('direccion')?.value,
      genero: this.myform.get('genero')?.value,
      edad: this.myform.get('edad')?.value,
      estadoCivil: this.myform.get('estadoCivil')?.value,
      email: this.myform.get('email')?.value,
      cantidadHijos: this.myform.get('cantidadHijos')?.value,
      documento: this.myform.get('documento')?.value
    }
    this.pacienteService.PutDatosPaciente(data,this.id)
        .subscribe(resp =>{
          console.log(resp);
          this.editar = !this.editar;
          this.id = null;
          this.listarDatos();
          this.myform.reset();
          alert("Cambios exitosos")
        },err=>{

        })
  }
  EliminarDatos(id:any){
    this.pacienteService.DeleteDatosPaciente(id)
        .subscribe(resp =>{
          console.log(resp);
          alert("Se ha eliminado correctamente")
          this.listarDatos();
        },err=>{

        })
  }

}
