import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lilita_One } from "next/font/google";

const lilitaOne = Lilita_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lilitaOne.className}>
      <Component {...pageProps} />
    </div>
  );
}