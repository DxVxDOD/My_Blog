import { Card } from "@/app/_components/cards/Card";
import Link from "next/link";
import NextLogo from "../../../public/next-js.svg";

export const CardList = () => {
  const blogs = [
    {
      path: "/first-entry",
      title: "Next.js, the second try",
      description:
        "How I came to understand Next.js, what it offers and a general approach to learning anything new as a beginner.",
      img: NextLogo,
      key: 1,
    },
  ];

  return (
    <nav className={"flex justify-center"}>
      {blogs.map((blog) => (
        <Link key={blog.key} href={blog.path}>
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
