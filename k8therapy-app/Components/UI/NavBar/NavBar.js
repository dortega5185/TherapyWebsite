import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [style, setStyle] = useState("navbar__clickedLogo");
  const router = useRouter();

  useEffect(() => {
    setStyle("");
  }, []);

  const addStyle = () => {
    console.log("you clicked");
    setStyle("navbar__clickedLogo");
  };

  return (
    <>
      <header className="navbar">
        <div className="color-overlay">
          <div className="navbar__container">
            <div
              className={`navbar__logo  ${style}`}
              onClick={() => addStyle()}
            >
              <Link href="/">
                {/* <a className="navbar__logo-text"> */}
                <Image src="/img/kstRoundLogo.svg" height={200} width={200} />
                {/* </a> */}
              </Link>
            </div>
            <div
              className="navbar__menu-btn"
              onClick={() => setSideNavOpenAction(!sideNavOpen)}
            >
              <FaBars />
            </div>
            <nav className="navbar__nav">
              <ul
                className={`navbar__navlist ${
                  sideNavOpen ? "navbar--menu-open" : ""
                }`}
              >
                <li
                  className="navbar__nav-li"
                  onClick={() => setSideNavOpenAction(!sideNavOpen)}
                >
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "active" : ""}>
                      About
                    </a>
                  </Link>
                </li>
                <li
                  className="navbar__nav-li"
                  onClick={() => setSideNavOpenAction(!sideNavOpen)}
                >
                  <Link href="/specialties">
                    <a
                      className={
                        router.pathname == "/specialties" ? "active" : ""
                      }
                    >
                      Specialties
                    </a>
                  </Link>
                </li>
                <li
                  className="navbar__nav-li"
                  onClick={() => setSideNavOpenAction(!sideNavOpen)}
                >
                  <Link href="/resources">
                    <a
                      className={
                        router.pathname == "/resources" ? "active" : ""
                      }
                    >
                      Resources
                    </a>
                  </Link>
                </li>
                <li
                  className="navbar__nav-li"
                  onClick={() => setSideNavOpenAction(!sideNavOpen)}
                >
                  <Link href="/faq">
                    <a className={router.pathname == "/faq" ? "active" : ""}>
                      FAQ
                    </a>
                  </Link>
                </li>
                <li
                  className="navbar__nav-li"
                  onClick={() => setSideNavOpenAction(!sideNavOpen)}
                >
                  <Link href="/connect">
                    <a
                      className={router.pathname == "/connect" ? "active" : ""}
                    >
                      Connect
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
