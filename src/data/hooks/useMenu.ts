import { useContext } from "react";
import ContextoMenu from "../context/MenuProvider";

export default function useMenu(){
    return useContext(ContextoMenu);
}