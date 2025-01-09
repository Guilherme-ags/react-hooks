import { useState } from "react";

export default function useStateValidado(valorInicial:any, funcaoValidacao:(e:any)=>boolean){
    const [valor, setValor] = useState(valorInicial);
    const [validado, setValidado] = useState(false);

    function setValorValidado(novoValor:any){
        setValor(novoValor);
        setValidado(funcaoValidacao(novoValor));
    }

    return [valor, setValorValidado, validado];
}