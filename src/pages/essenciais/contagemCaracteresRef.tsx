import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function(){
    const quantidadeCaracteres = 400;
    const [caracteresRestantes, setCaracteresRestantes] = useState(quantidadeCaracteres);
    const refTexto = useRef<any>();
    const contador = useRef<any>();

    function iniciaContador(){
        clearTimeout(contador.current);
        contador.current = setTimeout(() => {
            let quantidadeCaracteresDigitados = refTexto.current.value.length;
            setCaracteresRestantes(quantidadeCaracteres - quantidadeCaracteresDigitados);
        }, 700)
    }

    return(
        <Pagina titulo="Contagem de caracteres" subtitulo="Usando uma referêcia para controlar o tempo">
            <Display texto="Digite o texto" textoComplementar={`${caracteresRestantes} caracteres restantes.`}/>
            <textarea 
                ref={refTexto}
                onInput={iniciaContador}
                className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 rounded p-5`}></textarea>
        </Pagina>
    )
}