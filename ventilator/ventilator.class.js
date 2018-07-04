export class Ventilator{
    constructor(watts,brand,minRPM,maxRPM){
        this._watts=watts;
        this._brand=brand;
        this._minRPM=minRPM;
        this._maxRPM=maxRPM;
        this._on=false;
        this._off=true;
        this._velocity=0;
        this._rpm=0;
    }
    get watts(){
        return this._watts;
    }
    get brand(){
        return this._brand;
    }
    get minRPM(){
        return this._minRPM;
    }
    get maxRPM(){
        return this._maxRPM;
    }
    get on(){
        return this._on;
    }
    get off(){
        return this._off;
    }
    get rpm(){
        return this._rpm;
    }
    speedUp(){
        this._on=true;
        this._off=false;
        this._velocity<3?this._velocity++:this._velocity;
        this._velocity===1?this._rpm=this._minRPM:null;
        this._velocity===2?this._rpm=((this._minRPM+this._maxRPM)/2):null;
        this._velocity===3?this._rpm=this._maxRPM:null;
    }
    slowDown(){
        this._on=true;
        this._off=false;
        this._velocity>0?this._velocity--:null;
        this._velocity===1?this._rpm=this._minRPM:null;
        this._velocity===2?this._rpm=((this._minRPM+this._maxRPM)/2):null;
    }
    turnOff(){
        this._on=false;
        this._off=true;
        this._rpm=0;
        this._velocity=0;
    }
}

