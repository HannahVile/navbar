import "./App.css";
import { Link } from "react-scroll";

export default function App() {
  return (
    <div className="App">
  
      <header className="nav">
        <h1>Vile</h1>
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="schedule">
                SCHEDULE
              </Link>
            </li>
            <li>
      <Link activeClass="active" smooth spy to="blog">
        BLOG
      </Link>
    </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT 
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">*</section>
      <section id="schedule">SCHEDULE</section>
     <section id="blog">BLOG</section>
      <section id="contact">CONTACT </section>
    </div>
  
  );
}
