import { Card } from "@/app/_components/cards/Card";
import Link from "next/link";
import GitHub from '../../../public/github-mark-white.svg'

export const CardList = () => {
  const blogs = [
    {
      path: "/first-entry",
      title: "First entry!",
      description: "This is the first entry in my series of blog posts.",
      img: GitHub,
    }
  ];

  return (
    <nav className={'w-3/4 flex justify-center'} >
      {blogs.map((blog) => (
       <Link href={blog.path}>
         <Card
           title={blog.title}
           description={blog.description}
           img={blog.img}
         />
       </Link>
      ))}
    </nav>
  );
};
