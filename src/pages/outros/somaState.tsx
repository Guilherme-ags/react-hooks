import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function(){

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [validadeN1, setValidadeN1] = useState(false);
    const [validadeN2, setValidadeN2] = useState(false);
    const [soma, setSoma] = useState(0);

    useEffect(() => {
        setValidadeN1(n1>0);
    }, [n1]);

    useEffect(() => {
        setValidadeN2(n2>0);
    }, [n2]);

    function fazSoma(){
        if(validadeN1 && validadeN2){
            setSoma(n1+n2);
        }
        else{
            setSoma(-9999);
        }
    }

    return (
        <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
            <Flex col centerCross>
                <Display texto="Faça uma soma"></Display>
                <Flex center>
                    <InputFormatado tipo="number" valor={n1} onInput={(e) => {setN1(+e.target.value)}}/>
                    <span className="text-4xl ml-2">+</span>
                    <InputFormatado tipo="number" valor={n2} onInput={(e) => {setN2(+e.target.value)}}/>
                    <Botao cor="bg-orange-400" texto="=" onClick={fazSoma}/>
                </Flex>
                <Display texto={soma}/>
            </Flex>
        </Pagina>
    )
}