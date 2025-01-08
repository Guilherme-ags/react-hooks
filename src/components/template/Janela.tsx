import Flex from "./Flex";
export interface JanelaProps {
    titulo: string;
    children: any;
    cor?: string;
    className?: string;
    vertical?: boolean;
    espaco?: number;
}

export default function Janela(props: JanelaProps) {
    return (
        <Flex
            col
            gap={0}
            className={`
            overflow-hidden
            border border-zinc-700 rounded-lg 
            ${props.className ?? ""}
        `}
        >
            <Flex
                centerMain
                className={`
                p-4 text-lg font-black
                ${`${props.cor ?? "bg-black"}`} bg-opacity-70
            `}
            >
                {props.titulo}
            </Flex>
            <Flex
                center
                className={`
                flex-1 px-12 py-5 
                ${props.vertical && "flex-col"}
                ${`${props.cor ?? "bg-transparent"}`}
                ${`gap-${props.espaco ?? 3}`}
            `}
            >
                {props.children}
            </Flex>
        </Flex>
    );
}
