import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // aktif kalau scroll lebih dari 20px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      {/* Navbar utama */}
      <div
        className={`flex justify-between w-full max-w-[1200px] mx-auto items-center p-6 
          rounded-r-full rounded-l-full border-orange border-[0.5px] transition-all duration-300
          ${
            scrolled
              ? "bg-gradient-to-r from-black/60 via-black/40 to-black/30 backdrop-blur-md shadow-lg shadow-black/30"
              : "bg-black"
          }`}
      >
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>

      {/* Tombol toggle mobile */}
      <div
        className={`flex lg:hidden sm:block p-6 items-center justify-center rounded-full border-orange border-[0.5px] transition-all duration-300
          ${
            scrolled
              ? "bg-gradient-to-r from-black/60 via-black/40 to-black/30 backdrop-blur-md shadow-md shadow-black/30"
              : "bg-black"
          }`}
      >
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
