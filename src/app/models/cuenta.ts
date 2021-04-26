export class Cuenta {
_id?: number;
num_cuenta: string;
id_cliente: number;
contra: string;
saldo: number;

constructor(num_cuenta:string,id_cliente:number,contra:string,saldo:number){
this.num_cuenta = num_cuenta;
this.id_cliente = id_cliente;
this.contra = contra;
this.saldo = saldo;
}

}