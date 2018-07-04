export class Conta{
    constructor(agencia,numero){
        this._agencia=agencia;
        this._numero=numero;
        this._saldo=500;
    }
    get numero(){
        return this._numero;
    }
    get agencia(){
        return this._agencia;
    }
    get saldo(){
        return this._saldo;
    }
    toString(){
        msg='ag '+this._agencia+' cc '+this._numero+' saldo '+this._saldo+'.00';
        return msg;
    }

    saque(dinheiro){
        this._saldo>=dinheiro?this._saldo-=dinheiro:null;
    }

    depositarEmDinheiro(dinheiro){
        dinheiro<=1000?this._saldo+=dinheiro:null;
    }

    depositarEmCheque(dinheiro){
        dinheiro<=10000?this._saldo+=dinheiro:null;
    }
}