import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavMenuProps = {
  isOpen: boolean,
  closeMenu: () => void,
}

export default function NavMenu({ isOpen, closeMenu }: NavMenuProps) {
  const navData = [
    {title: 'Home', link: '#'},
    {title: 'Listings', link: '/#listings'},
    {title: 'Services', link: '/#services'},
    {title: 'Contact Us', link: '/#contact-us'},
  ];

  return (
    <nav className={`fixed top-0 ${isOpen ? 'left-0' : '-left-full'} bg-background h-screen w-[25%] max-sm:w-full transition-all duration-400 ease-in-out z-1000`}>
      <button onClick={closeMenu} className="cursor-pointer absolute right-10 top-8">
        <FontAwesomeIcon icon={faX} className="text-foreground/90 text-2xl" />
      </button>
      <div className="p-15">
        <ul className="font-sans text-[1.4rem] font-medium">
          {
            navData.map((item, i) => (
              <li className="py-1">
                <a href={item.link} className="hover:opacity-50 transition-opacity duration-500">{item.title}</a>
              </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}