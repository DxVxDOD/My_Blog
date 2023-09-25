import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const Card = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string | StaticImport;
}) => {
  return (
    <section className={"flex"}>
      <Image src={img} alt={"Blog image"} />
      <aside className={"flex flex-col"}>
        <span className={"font-bold"}>
          <b>{title}</b>
        </span>
        <span className={'w-3/4'} >{description}</span>
      </aside>
    </section>
  );
};
