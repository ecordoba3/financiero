import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCuentasComponent } from './components/listar-cuentas/listar-cuentas.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {path:'',component:ListarCuentasComponent},
  {path:'crear-cuenta',component:CrearCuentaComponent},
  {path:'editar-cuentas/:id',component:CrearCuentaComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
