import { useContext } from "react";
import ContextoTema from "../context/temaProvider";

export default function useTema(){
    return useContext(ContextoTema);
}