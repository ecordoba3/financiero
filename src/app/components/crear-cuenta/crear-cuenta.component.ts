import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuentaService } from 'src/app/services/cuenta.service';
import { Cuenta } from '../../models/cuenta';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
 cuentasForm: FormGroup;
 titulo = "Crear Cuenta";
 id:string | null;

  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService, 
              private _cuentaService: CuentaService,
              private aRouter:ActivatedRoute) {
    this.cuentasForm = this.fb.group({
      usuario: ['',Validators.required],
      cuenta: ['',Validators.required],
      contra: ['',Validators.required],
      valor: ['',Validators.required]
    })

    this.id=this.aRouter.snapshot.paramMap.get('id');
   }
 
  ngOnInit(): void {
    this.esEditar();
  }

  agregarcuenta(){
//console.log(this.cuentasForm)

const CUENTA: Cuenta = {
id_cliente: this.cuentasForm.get('usuario')?.value,
num_cuenta: this.cuentasForm.get('cuenta')?.value,
contra: this.cuentasForm.get('contra')?.value,
saldo: this.cuentasForm.get('valor')?.value,
}


if(this.id !== null){
  //Editamos cuenta
this._cuentaService.editarCuenta(this.id,CUENTA).subscribe(data=>{
  this.toastr.info('La cuenta ha sido actualizada!!', 'Cuenta actualizada!');
  this.router.navigate(['/']);
},error=>{
  console.log(error);
  this.cuentasForm.reset();
})

}else{
  //Creamos cuenta
  //console.log(CUENTA);
 this._cuentaService.guardarCuenta(CUENTA).subscribe(data=>{
  this.toastr.success('La cuenta ha sido creada satisfactoriamente', 'Cuenta registrada!');
  this.router.navigate(['/']);
},error=>{
  console.log(error);
  this.cuentasForm.reset();
})

 }
}





  esEditar(){
    if(this.id !== null){
   this.titulo = "Editar cuenta";
   this._cuentaService.obtenerCuenta(this.id).subscribe(data=>{
     this.cuentasForm.setValue({
      usuario: data.id_cliente, 
      cuenta: data.num_cuenta,
      contra: data.contra,
      valor: data.saldo
     })
     })
    }
  }



}
