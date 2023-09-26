import Header from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { CardList } from "@/app/_components/cards/CardList";

export default function Home() {
  return (
    <>
     <Header/>
      <main className='flex-auto flex flex-col items-center p-4' >
        <CardList/>
      </main>
      <Footer/>
    </>
  );
}
