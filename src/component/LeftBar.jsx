import {
  Home,
  CalendarDays,
  Users,
  Handshake
} from "lucide-react"

const menuItems = [
  { label: "Home", icon: Home },
  { label: "Events", icon: CalendarDays },
  { label: "Team", icon: Users },
  { label: "Sponsor", icon: Handshake },
]

const LeftBar = () => {
  return (
    <aside
      className="
        fixed
        z-50
        bottom-4
        left-1/2
        -translate-x-1/2
        flex
        w-[90%]

        md:mt-48
        md:left-6
        md:bottom-auto
        md:-translate-x-0
        md:-translate-y-1/2
        md:w-auto

        backdrop-blur-[10px]
        bg-black/30
        border border-white/20
        rounded-xl
        px-6
        py-4
      "
    >
      <nav className="w-full">
        <ul
          className="
            flex
            justify-between
            items-center

            md:flex-col
            md:gap-8
          "
        >
          {menuItems.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
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
                  hover:scale-105
                  active:scale-95
                "
              >
                <Icon
                  size={24}
                  className="
                    text-indigo-400
                    transition
                    duration-300
                    group-hover:text-indigo-300
                  "
                />
                <span className="text-xs md:text-sm font-medium">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default LeftBar
         