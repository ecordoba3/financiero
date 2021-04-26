import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/models/cuenta';
import { CuentaService } from '../../services/cuenta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-cuentas',
  templateUrl: './listar-cuentas.component.html',
  styleUrls: ['./listar-cuentas.component.css'],
})
export class ListarCuentasComponent implements OnInit {

listCuentas: Cuenta[] = [];


  constructor(private _cuentaService: CuentaService, private toastr: ToastrService ) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._cuentaService.getCuentas().subscribe(
      (data) => {
        console.log(data);
        this.listCuentas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

eliminarCuenta(id:any){
  this._cuentaService.eliminarCuentas(id).subscribe(data=>{
    this.toastr.error('La cuenta fue eliminada con exito','Cuenta eliminada');
    this.obtenerProductos();

  },error=>{
    console.log(error);
  });
}


}
