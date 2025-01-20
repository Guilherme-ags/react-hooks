import Pagina from "@/components/template/Pagina";
import { useLayoutEffect, useState } from "react";

export default function(){
    const [texto, setTexto] = useState("Texto secreto!!!!!!!!!!!!!!");

    useLayoutEffect(()=> {
        setTexto("Olá!");
    },[])

    return (
        <Pagina titulo="Texto secreto" subtitulo="Entendendo um problema no do useEffect">
            <p className="text-5xl text-gray-300">{texto}</p>
        </Pagina>
    )
}