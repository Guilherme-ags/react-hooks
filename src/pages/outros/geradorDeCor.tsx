import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useBoolean from "@/data/hooks/useBoolean";
import { useLayoutEffect, useRef, useState } from "react";

export default function(){

    const [mostrar, toggleMostrar, mostrarTrue, mostrarFalse] = useBoolean();
    const [texto, setTexto] = useState("Clique em sortear");
    const ref = useRef<any>();

    function geraCorAleatoria(){
        const numeroAleatorioHexadecimal = Math.floor(Math.random()*0xffffff);
        const cor = numeroAleatorioHexadecimal.toString(16);
        return cor;
    }

    useLayoutEffect(() => {
        if(mostrar){
            const cor = geraCorAleatoria();
            setTexto(`#${cor}`);
            ref.current.style.backgroundColor = `#${cor}`;
        }
        else{
            setTexto("Clique em sortear")
        }
    },[mostrar])

    return (
        <Pagina titulo="Gerador de Cor" subtitulo="Criando exemplos mais complexos">
            <Flex>
                <Botao texto="Sortear Cor" onClick={mostrarTrue}/>
                <Botao texto="Apagar Cor" onClick={mostrarFalse}/>
            </Flex>
            <Display texto={texto}/>
            {mostrar?<div ref={ref} className="h-32 w-32 bg-red-200"></div>:""}
        </Pagina>
    )
}