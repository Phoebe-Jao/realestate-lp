import Image from "next/image";
import MenuButton from "./blocks/MenuButton";

export default function Header() {
  return (
    <header className="bg-background">
      <div className="relative h-[13.4rem] max-sm:h-40 w-full max-w-7xl max-sm:max-w-68 mx-auto p-6 flex justify-center">
        <MenuButton />
        <Image 
          src="/assets/images/logo.png"
          alt="logo"
          width={493}
          height={167}
          className="object-contain"
        />
        <div className="absolute bottom-[-9.3rem]" style={{left: 'calc(50% - 1rem)'}}>
          <svg data-ux="SVG" className="x-el x-el-svg c1-1 c1-2 c1-3z c1-53 c1-54 c1-55 c1-56 c1-3y c1-57 c1-b c1-c c1-d c1-e c1-f c1-g">
            <g fill="white" fillRule="evenodd" width={53} height={24}>
              <path d="M26.5 24L53 0H0z"></path>
            </g>
          </svg>
        </div>
      </div>
    </header>
  )
}