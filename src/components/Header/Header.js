import React from "react";
import "../../App.css";
import "./header.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import SubHead from "./SubHead";
import logo from "../../assets/1.svg";
const Header = () => {
  const userCookie = Cookies.get("user");

  return (
    <div>
      {userCookie ? (
        <SubHead />
      ) : (
        <div class="sc-4abd7efd-0 fwqFtH">
          <div class="sc-4abd7efd-1 cEOECa">
            <div class="sc-4abd7efd-2 fOlkLG">
              <Link to="/" class="sc-4abd7efd-3 ubXNY">
                <img src={logo} style={{ width: "150px" }} />
              </Link>
            </div>
            <div class="sc-4abd7efd-2 fOlkLG hide-mobile">
              <div class="sc-4abd7efd-4 bICoNm"></div>
            </div>
            <button class="sc-4abd7efd-5 nEVVm hide-desktop">
              <svg class="sc-a8a76c9-0 fxBdmI" viewBox="0 0 16 16">
                <path d="M1 4h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 8H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
              </svg>
            </button>
          </div>
          <div class="sc-4abd7efd-7 hLqsKV hide-desktop">
            <div class="sc-4abd7efd-6 gRbOHP">
              <a href="/chrome-extension">Chrome extension</a>
              <a href="/use-cases">Use cases</a>
              <a href="/login">Get started →</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
