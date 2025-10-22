import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Your message has been sent.\nThank you for reaching out!');
  }

  const handleClick = () => {
    setIsClicked(prev => !prev);
  }

  const schedData = [ 
    {day: 'Mon', sched: '08:00AM - 07:00PM'}, 
    {day: 'Tue', sched: '08:00AM - 07:00PM'},
    {day: 'Wed', sched: '08:00AM - 07:00PM'},
    {day: 'Thu', sched: '08:00AM - 07:00PM'},
    {day: 'Fri', sched: '08:00AM - 07:00PM'},
    {day: 'Sat', sched: '08:00AM - 07:00PM'},
    {day: 'Sun', sched: '08:00AM - 07:00PM'},
  ];
  
  const todayDate = new Date().toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <section className="bg-foreground" id="contact-us">
      <div className="container">
        <h3 className="uppercase font-cinzel text-[2rem] text-background text-center mb-18 max-sm:mb-15 w-full">Call or Visit</h3>
        <div className="flex flex-wrap justify-center gap-20 w-full">
          <div className="flex flex-col gap-8 w-full max-w-1/2 max-sm:max-w-[80%]">
            <h3 className="font-sans font-medium text-3xl text-background">Send Message</h3>
            <form action="" onSubmit={handleSubmit} className="w-full flex flex-col gap-2 font-sans text-background">
              <input type="text" name="name" id="name" placeholder="Name" required />
              <input type="text" name="email" id="email" placeholder="Email" required />
              <textarea name="message" id="message" placeholder="Message" className="h-40 resize-none" required></textarea>
              <button type="submit" className="uppercase bg-light-gray text-[1.15rem] text-foreground font-bold w-fit py-4 max-sm:py-2 px-9 my-2 max-sm:-mb-1 rounded-4xl self-center cursor-pointer hover:opacity-75 transition-opacity duration-500">Send</button>
            </form>
            <small className="text-background/60 text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small>
          </div>
          <div className="flex flex-col gap-10 max-sm:max-w-[80%]">
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <a href="" className="block bg-background text-background rounded-4xl w-full max-w-76 mx-auto py-2.5 font-sans font-bold flex justify-center items-center hover:opacity-75 transition-opacity duration-500">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-foreground text-3xl" />
                  <span className="text-[1.15rem] text-foreground pl-1">Message us on WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col text-background">
              <h4 className="font-sans font-medium text-2xl max-sm:text-[1.4rem] max-sm:pb-2">Marci Metzger - THE RIDGE REALTY GROUP</h4>
              <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
              <a href="tel:2069196886" className="text-dark-red">(206) 919-6886</a>
            </div>
            <div className="flex flex-col text-background">
              <h4 className="font-sans font-medium text-2xl max-sm:text-[1.4rem] max-sm:pb-2">Office Hours</h4>
              <div onClick={handleClick} className="flex items-center gap-5 cursor-pointer hover:opacity-70 transition-opacity duration-500">
                {
                  isClicked ? (
                    <>
                      <ul>
                        {
                          schedData.map((item, i) => {
                            const isToday = item.day === todayDate;
                            return (
                              <li className="relative" key={i}>
                                <span className={`font-sans font-medium min-w-12 inline-block ${isToday ? 'text-dark-red' : ''}`}>{item.day} </span>
                                <span className={`${isToday ? 'font-bold text-dark-red' : ''}`}>
                                  {item.sched} 
                                  { i === 0 && (<FontAwesomeIcon icon={faArrowDown} className="text-background/50 text-[0.6rem] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 -right-8" />) }
                                </span>
                              </li>
                            )
                        })}
                      </ul>
                    </>
                  ) : (
                    <>
                      <p className="font-sans font-medium">Open today</p>
                      <p className="text-dark-red -mr-2">08:00AM - 07:00PM</p>
                      <FontAwesomeIcon icon={faArrowDown} className="text-dark-red text-[0.6rem]" />
                    </>
                  )
                }
              </div>
              {
                isClicked && (
                  <div className="flex gap-5 mt-4 font-sans">
                    <p className="font-medium">Open daily</p>
                    <p>08:00AM - 07:00PM</p>
                  </div>
                )
              }
              <p className="mt-4">Appointments outside office hours available upon request. Just call!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}