import Image from "next/image";

export default function Staff() {
  return (
    <section className="mt-28 max-sm:mt-0">
      <div className="bg-foreground">
        <div className="container flex flex-col justify-center items-center">
          <h3 className="font-cinzel text-[2rem] max-sm:text-[1.75rem] font-medium text-background uppercase mb-18">Marci Metzger</h3>
          <Image
            src="/assets/images/staff_img-01.jpg"
            alt="Marci Metzger"
            height={338.66}
            width={338.66}
            className="rounded-full mb-6"
          />
          <p className="font-sans text-[1.375rem] max-sm:max-w-[80%] max-sm:text-center text-background uppercase">Realtor for nearly 3 decades!</p>
          <p className="font-sans max-sm:text-[1.375rem] max-sm:mt-5 text-background">206-919-6886</p>
        </div>
      </div>
    </section>
  )
}