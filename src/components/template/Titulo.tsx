interface TituloProps {
    titulo: string;
    subtitulo?: string;
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1
                className={`
                font-black text-3xl
                text-gray-300 
            `}
            >
                {props.titulo}
            </h1>
            {props.subtitulo && (
                <h2
                    className={`
                    font-light text-md
                    text-gray-400
                `}
                >
                    {props.subtitulo}
                </h2>
            )}
        </div>
    );
}
