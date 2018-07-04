export class CD{
    constructor(nome,artista,faixas,anoLancamento){
        this._nome=nome;
        this._artista=artista;
        this._anoLancamento=anoLancamento;
        this._faixas=faixas;
        ouvidoPorInteiro=false;
        faixasOuvidas=0;
    }
    get nome(){
        return this._nome;
    }
    get artista(){
        return this._artista;
    }
    get faixas(){
        return this._faixas;
    }
    get dataLancamento(){
        return this._anoLancamento;
    }
    tocado(faixasOuvidas){
        if(faixasOuvidas===faixas){
            this._faixas=faixasOuvidas;
            ouvidoPorInteiro=true;
        }else{
            ouvidoPorInteiro=false;
        }
    }
}