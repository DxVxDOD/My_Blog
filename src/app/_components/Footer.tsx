import Link from "next/link";
import Image from "next/image";
import GitHub from '../../public/github-mark-white.svg'

export const Footer = () => {
  return (
    <footer className='' >
      <Link href='https://github.com/DxVxDOD'><Image width={25} height={25} src={GitHub} alt={'GitHub'}/></Link>
      <Link href=''></Link>
      <Link href=''></Link>
    </footer>
  )
}