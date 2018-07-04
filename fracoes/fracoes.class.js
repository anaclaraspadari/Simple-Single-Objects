export class Fraction{
    constructor(numerator,denominator){
        this._numerator=numerator;
        this._denominator=denominator;
        this._canReduce=canReduce(numerator,denominator);
    }
    get numerator(){
        return this._numerator;
    }
    get denominator(){
        return this._denominator;
    }
    get canReduce(){
        this._canReduce=canReduce(this.numerator,this.denominator);
        return this._canReduce;
    }
    plus(fracao){
        if(fracao.denominator===this.denominator){
            x=fracao.numerator+this.numerator+'/'+this.denominator;
            return x;
        }else{
            return mmc(fracao.denominator,this.denominator);
        }
    }
    reduce(){
        if(canReduce()){
            if(this._numerator>this._denominator){
                for(let i=2;i<=this._numerator;i++){
                    if((this._numerator%i===0&& this._denominator%i===0)){
                        this._numerator=this._numerator/i;
                        this._denominator=this._denominator/i;
                    }else{
                        for(let i=2;i<=this._denominator;i++){
                            if((this._numerator%i===0 && this._denominator%i===0)){
                                this._numerator=this._numerator/i;
                                this._denominator=this._denominator/i;
                            }
                        }
                    }
                }
            }
        }
    }
    divide(fracao){
        let f2=fracao.numerator*this.denominator;
        let f1=fracao.denominator*this.numerator;
        return f1+'/'+f2;
    }
    multiply(fracao){
        let f1=fracao.numerator*this.numerator;
        let f2=fracao.denominator*this.denominator;
        return f1+'/'+f2;
    }
    greaterThan(fracao) {
        let f1=fracao.numerator/fracao.denominator;
        let f2=this.numerator/this.denominator;
        if(f1<f2){
            return true;
        }else{
            return false;
        } 
    }
    lessThan(fracao){
        let f1=fracao.numerator/fracao.denominator;
        let f2=this.numerator/this.denominator;
        if(f1>f2){
            return true;
        }else{
            return false;
        } 
    }
    equals(fracao){
        let f1=fracao.numerator/fracao.denominator;
        let f2=this.numerator/this.denominator;
        if(f1===f2){
            return true;
        }else{
            return false;
        } 
    }
    toString(){
        msg=this.numerator+'/'+this.denominator;
        return msg;
    }
}
function canReduce(numerador,denominador){
    let n1=numerador;
    let d2=denominador;
    if(n1>d2){
        for(let i=2;i<=n1;i++){
            if(n1%i===0 && d2%i===0){
                return true;
            }
        }
        return false;
    }else{
        for(let i=2;i<=d2;i++){
            if(n1%i===0 && d2%i===0){
                return true;
            }
        }
        return false;
    }
}
const mmc=function(n1,n2){
    let d1=n1;
    let d2=n2;
    let resto=1;
    for (;resto!==0;){
        resto=d1%d2;
        d1=d2;
        d2=resto;
    }
    return (n1*n2)/d1;
};
