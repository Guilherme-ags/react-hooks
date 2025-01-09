import { IconMinus, IconPlus } from "@tabler/icons-react";
import Flex from "./Flex";
import useToggle from "@/data/hooks/useToggle";

interface MenuSecaoProps {
    titulo: string
    mini: boolean
    aberta: boolean
    children: any
    onClick?: () => void
}

export default function MenuSecao(props: MenuSecaoProps) {
    const { titulo, mini} = props;
    const [aberta, toggleAberta] = useToggle(props.aberta);

    return (
        <Flex col gap={4} className={`${mini && "items-center"}`}>
            <span className={`
                flex items-center justify-between
                text-zinc-400 uppercase font-bold 
                ${mini && "text-[11px]"} cursor-pointer
            `} onClick={() => toggleAberta()}>
                {mini ? titulo : (
                    <>
                        {titulo}
                        {aberta ? <IconMinus size={15} /> : <IconPlus size={15} />}
                    </>
                )}
            </span>
            {aberta && (
                <Flex col gap={1.5}>
                    {props.children}
                </Flex>
            )}
        </Flex>
    );
}
