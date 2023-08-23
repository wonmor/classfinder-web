import { AppProps } from "next/app";
import { Outfit } from "next/font/google";
import "../styles/index.css";

const outfit = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
