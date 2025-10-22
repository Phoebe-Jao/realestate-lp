import Image from "next/image";

type FeatureBlockProps = {
  image: string,
  title: string,
  text: string | string[],
  isReverse?: boolean;
}

export default function FeatureBlock({ image, title, text, isReverse }: FeatureBlockProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 max-sm:gap-6 max-sm:mt-12 ${
        isReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <Image
        src={`/assets/images/${image}`}
        alt={title}
        width={532}
        height={266}
      />
      <div className="w-full md:w-1/2">
        <h4 className="text-2xl max-sm:text-[1.375rem] font-semibold max-sm:text-center mb-2">{title}</h4>
        <p className="max-sm:text-[1rem] max-sm:text-center">
          {Array.isArray(text)
            ? text.map((line, i) => (
              <span key={i}>
                {line}
                {i !== text.length - 1 && <br />}
              </span>
            ))
            : text}
        </p>
      </div>
    </div>
  )
}