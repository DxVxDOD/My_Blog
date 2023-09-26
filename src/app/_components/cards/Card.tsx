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
    <section className={"grid grid-cols-2 w-[50em] h-[15rem]"}>
      <div className={'border border-zinc-700 rounded-xl flex justify-center items-center'}>
        <Image src={img} width={0} height={0} priority alt={"Blog image"} />
      </div>
      <aside className={"flex flex-col justify-center gap-2 p-4 rounded-r-xl"}>
        <span className={"font-bold text-xl"}>
          <b>{title}</b>
        </span>
        <span className={'w-3/4 text-xs'} >{description}</span>
      </aside>
    </section>
  );
};
