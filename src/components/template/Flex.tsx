export interface FlexProps {
    col?: boolean
    gap?: number
    center?: boolean
    centerMain?: boolean
    centerCross?: boolean
    children?: any
    className?: string
}

export default function Flex(props: FlexProps) {
    return (
        <div className={`
            flex
            ${props.col ? 'flex-col' : ''}
            ${props.gap != null ? `gap-${props.gap}` : 'gap-3'}
            ${props.center ? 'justify-center items-center' : ''}
            ${props.centerMain ? 'justify-center' : ''}
            ${props.centerCross ? 'items-center' : ''}
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}