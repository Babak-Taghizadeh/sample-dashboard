import MainLayout from "@/components/layouts/main-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout className={geistSans.className}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
