export class ATM{
    constructor(numeroSerie,valor){
        this._numeroSerie=numeroSerie;
        this._valor=valor;
        this._cedulas=[[5,0],[10,0],[20,0],[50,0][100,0]];
    }
    get numeroSerie(){
        return numeroSerie;
    }
    get valor(){
        this._valor=this.calcularValor();
        return this._valor;
    }
    cedula(ced){
        if(ced===5){
            return this._cedulas[0,0];
        }else if(ced===10){
            return this._cedulas[0,1];
        }else if(ced===20){
            return this._cedulas[0,2];
        }else if(ced===50){
            return this._cedulas[0,3];
        }else if(ced===100){
            return this._cedulas[0,4];
        }else{
            return 0;
        }
    }
    abastecer(n,ced){
        if(ced===5){
            if(this._cedulas[0][0]<=100){
                if(this._cedulas[0][0]+n<=100){
                    this._cedulas[0][0]+=n;
                }
            }
        }else if(ced===10){
            if(this._cedulas[0][1]<=100){
                if(this._cedulas[0][1]+n<=100){
                    this._cedulas[0][1]+=n;
                }
            }
        }else if(ced===20){
            if(this._cedulas[0][2]<=100){
                if(this._cedulas[0][2]+n<=100){
                    this._cedulas[0][2]+=n;
                }
            }
        }else if(ced===50){
            if(this._cedulas[0][3]<=100){
                if(this._cedulas[0][3]+n<=100){
                    this._cedulas[0][3]+=n;
                }
            }
        }else if(ced===100){
            if(this._cedulas[0][4]<=100){
                if(this._cedulas[0][4]+n<=100){
                    this._cedulas[0][4]+=n;
                }
            }
        }else{
            return 0;
        }
    }
    retirar(valor){
        if (valor<=this._valor) {
            let numeros=[];
            let ret=[];
            let retDinheiro=0;
            let verificao=[];
            if((this._cedulas[0][4]*100!==0)){
                retDinheiro=parseInt(valor/100);
                if (retDinheiro>=this._cedulas[0][4]){
                    valor-=this._cedulas[0][4]*100;
                    verificao.push([100,this._cedulas[0][4]]);
                }else{
                    valor-=retDinheiro*100;
                    verificao.push([100,retDinheiro]);
                }
                numeros.push(100);
                ret.push(4);
            }else if((this._cedulas[0][3]*50!==0)){
                retDinheiro=parseInt(valor/50);
                if(retDinheiro>=this._cedulas[0][3]){
                    valor-=this._cedulas[0][3]*50;
                    verificao.push([50,this._cedulas[0][3]]);
                }else{
                    valor-=retDinheiro*50;
                    verificao.push([50,retDinheiro]);
                }
                numeros.push(50);
                ret.push(3);
            }else if((this._cedulas[0][2]*20!==0)){
                retDinheiro=parseInt(valor/20);
                if(retDinheiro>=this._cedulas[0][2]){
                    valor-=this._cedulas[0][2]*20;
                    verificao.push([20,this._cedulas[0][2]]);
                }else{
                    valor-=retDinheiro*20;
                    verificao.push([20,retDinheiro]);
                }
                numeros.push(20);
                ret.push(2);
            }else if((this._cedulas[0][1]*10!==0)){
                retDinheiro=parseInt(valor/10);
                if(retDinheiro>=this._cedulas[0][1]){
                    valor-=this._cedulas[0][1]*10;
                    verificao.push([10,this._cedulas[0][1]]);
                }else{
                    valor-=retDinheiro*10;
                    verificao.push([10,retDinheiro]);
                }
                numeros.push(10);
                ret.push(1);
            }else if((this._cedulas[0][0]* 5!== 0)){
                retDinheiro=parseInt(valor/5);
                if(retDinheiro>=this._cedulas[0][0]){
                    valor-=this._cedulas[0][0]*5;
                    verificao.push([5,this._cedulas[0][0]]);
                }else{
                    valor-=retDinheiro*5;
                    verificao.push([5,retDinheiro]);
                }
                numeros.push(5);
                ret.push(0);
            }else{
                for(let i=0;i<verificao.length;i++){
                    if (verificao[i].indexOf[numeros[i]]!==-1){
                        this._valor-=verificao[i][1]*numeros[i];
                        this._cedulas[(tirarcedulas[i])][0]-=verificao[i][1];
                    }
                }
            }
        }
    }
    toString(){
        msg='Série: '+this._numeroSerie+'\n Valor: '+this._valor;
        return msg;
    }
}