import { useState } from "react";

export default function useToggle(valor?: boolean){
    const [ativo, setAtivo] = useState(valor ?? false);

    function toggleAtivo(){
        setAtivo(!ativo);
    }

    const r: [boolean, ()=>void] = [ativo, toggleAtivo];

    return r;
}