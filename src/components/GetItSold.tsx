import FeatureBlock from "./blocks/FeatureBlock";

export default function GetItSold() {
  return (
    <section className="bg-background">
      <div className="container px-6">
        <h3 className="font-cinzel uppercase text-center text-[2rem] mb-18 max-sm:mb-10">Get it sold</h3>
        <FeatureBlock 
          image="feature_img-01.jpg"
          title="Top Residential Sales Last 5 Years"
          text={["We helped nearly 90 clients in 2021, and closed 28.5 million in sales!", "Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."]}
        />
        <FeatureBlock 
          image="feature_img-02.jpg"
          title="Don't Just List it..."
          text="Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
          isReverse={true}
        />
        <FeatureBlock 
          image="feature_img-03.jpg"
          title="Guide to Buyers"
          text="Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!"
        />
      </div>
    </section>
  )
}