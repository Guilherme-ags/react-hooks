import { forwardRef, useImperativeHandle, useRef } from "react";

interface InputFormatadoProps {
    label?: string;
    tipo: string;
    className?: string,
    ref: any;
}

function InputComReferencia(props: InputFormatadoProps, ref: any) {
    const referenciaInterna = useRef<any>();

    function novasFuncionalidades(){
        return {
            apagar: function(){
                referenciaInterna.current.value = referenciaInterna.current.value.slice(0,-1);
            },
            textoPadrao: function () {
                referenciaInterna.current.value = "Padrão!";
            }
        }
    }

    useImperativeHandle(ref, novasFuncionalidades);

    return (
        <>
            <label className="m-1">{props.label}</label>
            <input
                ref={referenciaInterna}
                type={props.tipo}
                className={`
                    text-gray-600 px-2 
                    w-40 h-11 rounded-md
                    ${props.className ?? ''}
                `}
            />
        </>
    );
}

export default forwardRef(InputComReferencia);
