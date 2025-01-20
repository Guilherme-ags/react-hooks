import { useId } from "react";
import Flex from "../template/Flex";

export default function InputComId(props: any){
    const id = useId();
    return(
        <Flex center>
            <label className="m-1" htmlFor={id}>{props.label}</label>
            <input id={id} type="text"  className="m-2 text-gray-600 p-2 rounded-md"></input>
        </Flex>
    )
}