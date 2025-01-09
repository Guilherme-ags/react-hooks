import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { createContext, useState } from "react";

export let Contexto = createContext({} as any);

export default function(){
    
    const [carrinho, setCarrinho] = useState<any>([]);

    function total(){
        const r = carrinho.reduce((acc: number, produto: { preco: string | number; }) => acc + +produto.preco, 0);
        return r;
    };

    const objContexto = {carrinho, setCarrinho, total};
    return (
        <Contexto.Provider value={objContexto}>
            <Pagina titulo="Loja" subtitulo="Compartilhando informações entre multiplos componentes com contexto">
                <Flex col gap={4}>
                    <Flex gap={4}>
                        <AdicionarProduto/>
                        <FinalizarCompra/>
                    </Flex>
                    <Carrinho/>
                </Flex>
            </Pagina>
        </Contexto.Provider>
    )
}