import Image from "next/image";

type ServiceBlockProps = {
  image: string,
  title: string,
  text: string,
}

export default function ServiceBlock({ image, title, text }: ServiceBlockProps) {
  return (
    <div className="flex flex-col gap-8 max-sm:gap-4 items-center px-6 pb-12">
      <Image
        src={`/assets/images/${image}`}
        alt={title}
        height={338.66}
        width={338.66}
      />
      <h3 className="font-sans text-[1.375rem] text-center">{title}</h3>
      <p className="font-sans text-[1rem] text-center">{text}</p>
    </div>
  )
}