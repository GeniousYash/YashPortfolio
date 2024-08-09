import Logo from "./Logo"
import Menu from "./Menu"

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-7 py-6">
          <Logo />
          <Menu />
    </div>
  )
}

export default NavBar
