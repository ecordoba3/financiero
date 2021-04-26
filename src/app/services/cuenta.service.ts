import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

url = 'http://localhost:4000/api/cuentas/';

constructor(private http: HttpClient) { }

getCuentas(): Observable<any> {
  return this.http.get(this.url);
}

eliminarCuentas(id:string): Observable<any> {
  return this.http.delete(this.url+id);
}

guardarCuenta(cuenta:Cuenta):Observable<any> {
 return this.http.post(this.url,cuenta);
}

obtenerCuenta(id:string):Observable<any> {
  return this.http.get(this.url+id);
 }

 editarCuenta(id:string,cuenta:Cuenta):Observable<any>{
   return this.http.put(this.url + id,cuenta);
 }

}
