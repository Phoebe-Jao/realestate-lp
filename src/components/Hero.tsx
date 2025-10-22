export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 -bottom-24 max-sm:bottom-16 left-1/2 max-sm:w-full max-sm:max-w-[80%] max-sm:mx-auto flex flex-col items-center">
        <p className="font-sans text-2xl max-sm:text-[1.375rem] tracking-wider text-background text-center mb-5">MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <h1 className="font-cinzel font-normal tracking-wide text-[4rem] max-sm:text-[2.5rem] text-center text-background uppercase">Pahrump Realtor</h1>
        <button className="uppercase font-bold text-center bg-background rounded-[3rem] py-2 w-38 max-sm:w-full max-sm:mt-[1rem] h-14 whitespace-nowrap cursor-pointer hover:opacity-50 transition-opacity duration-500">
          Call now
        </button>
      </div>
    </section>
  )
}