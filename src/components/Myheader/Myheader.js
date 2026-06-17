import './Myheader.css';
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';

const Myheader = () => (
  <header className="site-header">
    <div className="header-inner">
      <a className="header-logo" href="#home" aria-label="Fland головна">
        <img src="/Fland.svg" alt="Fland" />
      </a>

      <nav className="header-nav" aria-label="Головна навігація">
        <a href="#home">Головна</a>
        <a href="#cars">Авто</a>
        <a href="#news">Новини</a>
        <a href="#support">Підтримка</a>
      </nav>

      <div className="header-actions">
        <button className="header-icon" type="button" aria-label="Обране">
          <FaRegHeart />
        </button>
        <button className="header-icon" type="button" aria-label="Профіль">
          <FaRegUserCircle />
        </button>
        <button className="sell-btn" type="button">
          Продати авто
        </button>
      </div>
    </div>
  </header>
);

export default Myheader;
