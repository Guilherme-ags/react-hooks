import InputComId from "@/components/formulario/inputComId";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";

export default function(){
    let id = useId();

    return(
        <Pagina titulo="Usando o hook useId em um componente" subtitulo="Reusando o hook useId">
            <InputComId label="Nome"/>
            <InputComId label="Sobrenome"/>
        </Pagina>
    )
}