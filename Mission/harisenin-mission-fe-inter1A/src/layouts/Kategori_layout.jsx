import Header from "../components/headers/Header_beranda";
import Footer from "../components/organisems/Footer";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, LogOut } from "lucide-react";
import Profile from "../assets/Profile.png";

const SemuaProduk_layout = ({children}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <Header>
        <Menu
          color="#4A505C"
          className="sm:hidden"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        />
        <Link 
          to="/kategori"
          className={`hidden font-semibold leading-[140%] tracking-[0.2px] sm:inline
            ${currentPath === "/kategori" ? "text-primary" : "text-dark-secondary "}
          `}>
          Kategori
        </Link>

        <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <img
            src={Profile}
            alt="Profile picture"
            className="w-11 rounded-[10px] hidden  sm:inline"
          />
        </button>
      </Header>
        {children}
      <Footer/>
    </>
  )
}

export default SemuaProduk_layout