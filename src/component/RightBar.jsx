import { useState } from "react"

// UI icons (Lucide)
import { ChevronLeft, ChevronRight } from "lucide-react"

// Brand icons (react-icons)
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa6"

const socialItems = [
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "X", icon: FaXTwitter, href: "#" },
  { label: "LinkedIn", icon: FaLinkedin, href: "#" },
  { label: "Facebook", icon: FaFacebook, href: "#" },
  { label: "Discord", icon: FaDiscord, href: "#" },
  { label: "Reddit", icon: FaReddit, href: "#" },
  { label: "WhatsApp", icon: FaWhatsapp, href: "#" },
]

const RightBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* 📱 Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          right-2
          bottom-24
          z-50
          md:hidden
          backdrop-blur-[10px]
          bg-black/40
          border border-white/20
          rounded-full
          p-2
          text-white
        "
      >
        {open ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {/* 📱 + 💻 Right Bar */}
      <aside
        className={`
          fixed
          z-40
          right-6
          top-1/2
          -translate-y-1/2
          backdrop-blur-[10px]
          bg-black/30
          border border-white/20
          rounded-xl
          px-4
          py-6
          transition-transform
          duration-300

          md:translate-x-0
          ${open ? "translate-x-0" : "translate-x-[120%]"}
        `}
      >
        <nav>
          <ul className="flex flex-col gap-6">
            {socialItems.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    gap-1
                    text-white/70
                    transition-all
                    duration-300
                    hover:text-white
                    hover:scale-110
                  "
                >
                  <Icon
                    size={22}
                    className="
                      text-indigo-400
                      transition
                      duration-300
                      group-hover:text-indigo-300
                    "
                  />
                  <span className="text-[10px] font-medium">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default RightBar
