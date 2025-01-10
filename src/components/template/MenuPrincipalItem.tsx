import useTema from "@/data/hooks/useTema";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";

interface MenuItemProps {
    icone?: any;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
    selecionado?: boolean | undefined;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, tag, url, mini, selecionado } = props;
    const {corDestaque} = useTema();

    return (
        <Link
            id={titulo}
            href={url}
            className={`
            flex items-center gap-2 text-zinc-400 rounded-md
            hover:bg-zinc-800 px-3 py-2
            ${selecionado && `text-${corDestaque} bg-zinc-900`}
        `}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
            {!mini && tag && (
                <span
                    className={`
                    ${selecionado ? `bg-${corDestaque}` : "bg-zinc-700"}
                    text-white text-[11px] rounded-full px-2
                `}
                >
                    {tag}
                </span>
            )}
        </Link>
    );
}
