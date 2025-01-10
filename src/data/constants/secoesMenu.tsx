import { IconAppWindow, IconArrowsLeftRight, IconDimensions, IconLetterCase, IconLock, IconMathGreater, IconNumbers, IconRefreshAlert, IconSection, IconShoppingCart, IconUsers } from "@tabler/icons-react";

export const secoes = [
    {
        titulo: "Essenciais",
        aberta: false,
        itens: [
            {titulo: "Contador", url: "/essenciais/contador", tag: "useState", icone: <IconNumbers/>},
            {titulo: "Votação", url: "/essenciais/votacao", tag: "useState", icone: <IconUsers/>},
            {titulo: "Consulta à API", url: "/essenciais/consultaAPI", tag: "useEffect", icone: <IconArrowsLeftRight/>},
            {titulo: "Maior", url: "/essenciais/maior", tag: "useEffect", icone: <IconMathGreater/>},
            {titulo: "Contagem de caracteres", url: "/essenciais/contagemCaracteresEffect", tag: "useEffect", icone: <IconLetterCase/>},
            {titulo: "State VS Referencia", url: "/essenciais/stateVsRef", tag: "useRef", icone: <IconRefreshAlert/>},
            {titulo: "Referenciando elemento", url: "/essenciais/refElemento", tag: "useRef", icone: <IconSection/>},
            {titulo: "Contagem de caracteres", url: "/essenciais/contagemCaracteresRef", tag: "useRef", icone: <IconLetterCase/>},
        ],
    },
    {
        titulo: "Personalizados",
        aberta: true,
        itens: [
            {titulo: "Modal", url: "/personalizados/modal", tag: "personalizados", icone: <IconAppWindow/>},
            {titulo: "Tamanho Janela", url: "/personalizados/tamanhoJanela", tag: "personalizados", icone: <IconDimensions/>},
            {titulo: "Validando Senha", url: "/personalizados/senha", tag: "personalizados", icone: <IconLock/>},
        ]
    },
    {
        titulo: "Contexto",
        aberta: true,
        itens: [
            {titulo: "Loja", url: "/contexto/loja", tag: "useContext", icone: <IconShoppingCart/>},
        ]
    },
];

export default secoes;