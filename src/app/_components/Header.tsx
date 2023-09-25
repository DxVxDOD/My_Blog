import Link from "next/link";

export default function Header () {
  return (
      <header className="border border-zinc-700 border-t-0 flex p-2 pl-12 border-l-0 border-r-0">
        <Link href="/"><span className='text-2xl font-extrabold' >David's Thoughts</span></Link>
      </header>
  )
}