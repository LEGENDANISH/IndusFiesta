import { navlinks } from "../constant"

const NavBar = () => {
  return (
    <header className="w-full flex justify-center mt-6">
      <nav
        className="
          relative
          flex
          gap-[60px]
          py-[15px]
          px-[30px]
          rounded-[5px]
          backdrop-blur-[10px]
         
          text-[25px]
          font-kensmark
        "
      >
        {navlinks.map(({ label }) => (
          <a
            key={label}
            href={`#${label}`}
            className="text-white hover:opacity-80 transition"
          >
            {label}
          </a>
        ))}
      </nav>
       <div className="absolute top-0 left-0">
        <img
          src="./logo.png"
          alt="Logo"
          className="h-28  w-auto object-contain cursor-pointer"
        />
      </div>
    </header>
  )
}

export default NavBar
