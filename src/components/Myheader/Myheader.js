import './Myheader.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';

const Myheader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="header-logo" to="/" aria-label="Fland головна" onClick={closeMenu}>
          <img src="/Fland.svg" alt="Fland" />
        </Link>

        <nav className={isMenuOpen ? 'header-nav open' : 'header-nav'} aria-label="Головна навігація">
          <Link to="/" onClick={closeMenu}>Головна</Link>
          <Link to="/offers" onClick={closeMenu}>Авто</Link>
          <a href="/news" onClick={closeMenu}>Новини</a>
          <Link to="/support" onClick={closeMenu}>Підтримка</Link>
          <Link className="sell-btn mobile-sell" to="/signup" onClick={closeMenu}>
            Продати авто
          </Link>
        </nav>

        <div className="header-actions">
          <Link className="header-icon" to="/wishlist" aria-label="Обране" onClick={closeMenu}>
            <FaRegHeart />
          </Link>
          <Link className="header-icon" to="/profile" aria-label="Профіль" onClick={closeMenu}>
            <FaRegUserCircle />
          </Link>
          <Link className="sell-btn desktop-sell" to="/signup" onClick={closeMenu}>
            Продати авто
          </Link>
          <button
            className={isMenuOpen ? 'burger-btn open' : 'burger-btn'}
            type="button"
            aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Myheader;
