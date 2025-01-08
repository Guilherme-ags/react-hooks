import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function(){
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [maior, setMaior] = useState(0);

    function calculaMaior(){
        return (n1>n2) ? n1 : n2;
    }

    useEffect(() => {
        let m = calculaMaior();
        setMaior(m);
    }, [n1, n2]);

    useEffect(() => {
        if(maior > 5){
            window.alert("Os números estão ficando altos!");
        }
    }, [maior]);

    return(
        <Pagina >
            <Display texto={`N1: ${n1} | N2: ${n2}`} textoComplementar={`O maior número é ${maior}`}/>
            <Flex gap={5}>
                <Botao redondo tamanho="2xl" cor="bg-red-500" texto="N1" onClick={()=> setN1(n1+1)}/>
                <Botao redondo tamanho="2xl" cor="bg-blue-500" texto="N2" onClick={()=> setN2(n2+1)}/>
            </Flex>
        </Pagina>
    )
}