import { useState } from "react";

export default function useBoolean(valor?: boolean){
    const [ativo, setAtivo] = useState(valor ?? false);

    function toggleAtivo(){
        setAtivo(!ativo);
    }

    function ativoTrue(){
        setAtivo(true);
    }

    function ativoFalse(){
        setAtivo(false);
    }

    const r: [boolean, ()=>void, ()=>void, ()=>void] = [ativo, toggleAtivo, ativoTrue, ativoFalse];

    return r;
}