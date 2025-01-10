import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TemaProvider } from "@/data/context/temaProvider";
import { MenuProvider } from "@/data/context/MenuProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TemaProvider>
            <MenuProvider>
                <Component {...pageProps} />
            </MenuProvider>
        </TemaProvider>
    );
}
