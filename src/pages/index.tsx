import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20`}
    >
      <h1>Hello Patara</h1>
    </div>
  );
}
