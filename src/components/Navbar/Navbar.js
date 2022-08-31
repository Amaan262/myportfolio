import React,{useEffect,useRef} from "react";
import './Navbar.css'
const headerNav = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Web Design",
    path: "#web-design",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "About Me",
    path: "#about",
  },
];

function Navbar() {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader =() =>{
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    }
    window.addEventListener("scroll",shrinkHeader);
    return () =>{
      window.removeEventListener("scroll",shrinkHeader)
    }
  },[])

  return (
    <nav ref={headerRef}  className="navbar">
      <div className="logo">
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/images/img/logoWhite.png"}
            alt="Amaan Ahmad"
          />
        </a>
      </div>
      <ul>
        {headerNav.map((e,i) => {
          return (
            <li key={i} >
              <a href={e.path}>{e.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
