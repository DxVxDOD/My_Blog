import Link from "next/link";
import Image from "next/image";
import GitHub from '../../public/github-mark-white.svg'
import Twitter from '../../public/twitter-logo.svg'
import LinkedIn from '../../public/linkedin-svgrepo-com (1).svg'

export const Footer = () => {
  return (
    <footer className='flex-shrink-0 flex justify-center gap-4 p-2 border border-b-0 border-l-0 border-r-0 border-t-zinc-700 shadow-zinc-400 shadow-2xl ' >
      <Link href='https://github.com/DxVxDOD'><Image width={25} height={25} src={GitHub} alt={'GitHub'}/></Link>
      <Link href='https://twitter.com/OrbanDavid24'><Image width={25} height={25} src={Twitter} alt={'Twitter'}/></Link>
      <Link href='https://www.linkedin.com/in/david-orbang/'><Image width={25} height={25} src={LinkedIn} alt={'LinkedIn'}/></Link>
    </footer>
  )
}