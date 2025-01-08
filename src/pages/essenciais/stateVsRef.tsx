import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function(){
    const [estado, setEstado] = useState(0);
    const referencia = useRef(0);

    function incrementaReferencia(){
        referencia.current = referencia.current+1;
    }

    return(
        <Pagina titulo="Referência Vs State" subtitulo="Entendendo useRef">
            <Display texto={`R: ${referencia.current} | S: ${estado}`}/>
            <Flex gap={5}>
                <Botao redondo tamanho="2xl" cor="bg-pink-500" texto="R+" onClick={() => incrementaReferencia()}/>
                <Botao redondo tamanho="2xl" cor="bg-green-500" texto="S+" onClick={() => setEstado(estado+1)}/>
            </Flex>
        </Pagina>
    )
}