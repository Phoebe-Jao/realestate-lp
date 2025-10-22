import Image from "next/image";
export default function Sponsor() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="flex w-full justify-evenly max-sm:max-w-[75%] max-sm:flex-wrap max-sm:mx-auto max-sm:gap-6">
          <Image 
            src="/assets/images/sponsor_img-01.png"
            alt="The Ridge Realty Group"
            height={100}
            width={100}
          />
          <Image 
            src="/assets/images/sponsor_img-02.png"
            alt="Equal Housing Opportunity"
            height={100}
            width={100}
          />
          <Image 
            src="/assets/images/sponsor_img-03.png"
            alt="Realtor"
            height={100}
            width={100}
          />
          <Image 
            src="/assets/images/sponsor_img-04.png"
            alt="Pahrump Valley"
            height={100}
            width={100}
          />
        </div>
      </div>
    </section>
  )
}