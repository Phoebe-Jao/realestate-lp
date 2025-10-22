export default function Listings() {
  return (
    <section className="bg-foreground relative" id="listings">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/images/listings_img.jpg')" }}
      >
      </div>
      <div className="container relative z-10 max-sm:pb-0">
        <h3 className="font-cinzel uppercase text-[2rem] max-sm:text-[1.75rem] max-sm:max-w-[80%] max-sm:mx-auto text-background text-center mb-14">Find your dream home</h3>
        <form action="" className="bg-background p-10 font-sans form-glow">
          <h1 className="font-cinzel text-dark-red text-[2rem] max-sm:text-[1.6rem] uppercase mb-8">Search Listings</h1>
          <div className="flex flex-wrap gap-x-[1.6rem] gap-y-6">
            <div className="form-input">
              <label htmlFor="location">Location</label>
              <select name="location" id="location">
                <option value="philippines">Philippines</option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="type">Type</label>
              <select name="type" id="type">
                <option value=""></option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="sortBy">Sort By</label>
              <select name="sortBy" id="sortBy">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-low-high">Least Expensive to Most</option>
                <option value="price-high-low">Oldest</option>
                <option value="bedroom-low-high">Bedrooms (Low to High)</option>
                <option value="bedroom-high-low">Bedrooms (High to Low)</option>
                <option value="bathroom-low-high">Bathrooms (Low to High)</option>
                <option value="bathroom-high-low">Bathrooms (High to Low)</option>
              </select>
            </div>
            <div className="flex max-sm:flex-col gap-[1.6rem] w-full">
              <div className="flex gap-[1.6rem]">
                <div className="form-input max-w-[9.3rem]">
                  <label htmlFor="bedrooms">Bedrooms</label>
                  <select name="bedrooms" id="bedrooms">
                    <option value="">Any Number</option>
                    <option value="bedroom-studio">Studio</option>
                    <option value="bedroom-1">1+</option>
                    <option value="bedroom-2">2+</option>
                    <option value="bedroom-3">3+</option>
                    <option value="bedroom-4">4+</option>
                    <option value="bedroom-5">5+</option>
                    <option value="bedroom-6">6+</option>
                  </select>
                </div>
                <div className="form-input max-w-[9.3rem]">
                  <label htmlFor="bathrooms">Bedrooms</label>
                  <select name="bathrooms" id="bedrooms">
                    <option value="">Any Number</option>
                    <option value="bathroom-1">1+</option>
                    <option value="bathroom-2">2+</option>
                    <option value="bathroom-3">3+</option>
                    <option value="bathroom-4">4+</option>
                    <option value="bathroom-5">5+</option>
                    <option value="bathroom-6">6+</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-[1.6rem]">
                <div className="form-input max-w-[9.3rem]">
                  <label htmlFor="minPrice">Min. Price</label>
                  <input type="number" name="minPrice" id="minPrice" />
                </div>
                <div className="form-input max-w-[9.3rem]">
                  <label htmlFor="maxPrice">Max. Price</label>
                  <input type="number" name="maxPrice" id="maxPrice" />
                </div>
              </div>
              <button type="submit" disabled className="w-full max-w-[20rem] max-sm:py-4 rounded-[3rem] text-foreground/50 flex justify-center items-center font-bold bg-light-gray">Search Now</button>
            </div>
          </div>
        </form>
      </div>
      {/* <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/listings_img.jpg')" }}
      >
      </div> */}
    </section>
  )
}