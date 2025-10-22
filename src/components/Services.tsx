import ServiceBlock from "./blocks/ServiceBlock";

export default function Services() {
  return (
    <section className="bg-background" id="services">
      <div className="container">
        <h3 className="uppercase font-cinzel text-[2rem] text-dark-red text-center mb-18 max-sm:mb-10">Our Services</h3>
        <div className="flex max-sm:flex-wrap">
          <ServiceBlock
            image="services_img-01.jpg"
            title="Real Estate Done Right"
            text="Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
          />
          <ServiceBlock
            image="services_img-02.jpg"
            title="Commercial & Residential"
            text="Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars."
          />
          <ServiceBlock
            image="services_img-03.jpg"
            title="Rely on Expertise"
            text="If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
          />
        </div>
      </div>
    </section>
  )
}