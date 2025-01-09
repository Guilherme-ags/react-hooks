import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { IconX } from "@tabler/icons-react";

export default function(){
    const [mostrar, toggleMostrar] = useToggle(false);

    return(
        <Pagina titulo="Modal" subtitulo="Usando um hook personalizado para abrir e fechar um modal">
            <Botao texto="Abrir" cor="bg-cyan-500" onClick={toggleMostrar}/>
            { mostrar ? (
                    <Flex center col className={`w-80 h-80 bg-gray-500 text-white text-xl p-4 m-4 rounded-md`}>
                        <Botao cor="bg-red-700" tamanho="xl" icone={<IconX/>} onClick={toggleMostrar}/>
                        <h1 className="mt-5">Clique em X para sair</h1>
                    </Flex> 
                )
                : ("")
            }
        </Pagina>
    )
}