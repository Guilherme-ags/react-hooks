import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function(){
    let id = useId();

    return(
        <Pagina titulo="Conhecendo o hook useId" subtitulo="Usando use Id em um formulário">
            <Flex center>
                <label className="m-1" htmlFor={`nome-${id}`}>nome:</label>
                <input id={`nome-${id}`} type="text" className="m-2 text-gray-600 p-2 rounded-md"></input>
            </Flex>
            <Flex center>
                <label className="m-1" htmlFor={`sobrenome-${id}`}>sobrenome:</label>
                <input id={`sobrenome-${id}`} type="text"  className="m-2 text-gray-600 p-2 rounded-md"></input>
            </Flex>
        </Pagina>
    )
}