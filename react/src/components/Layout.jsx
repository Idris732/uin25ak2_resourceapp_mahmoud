import Nav from "./Nav";
import "../style.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children }) {
  const navigate = useNavigate();


  useEffect(() => {
    navigate("/html", { replace: true });
  }, []); // Tom array: kjører bare første gang eller ved oppfriskning.
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}