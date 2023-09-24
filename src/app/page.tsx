import Link from "next/link";
import Header from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";

export default function Home() {
  return (
    <>
     <Header/>
      <main>
      <Link href='/first-entry'>First Entry</Link>
      </main>
      <Footer/>
    </>
  );
}
