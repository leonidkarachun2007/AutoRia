import './Myfooter.css';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const tags = [
  'Відгуки про автомобіль',
  'Авто Лідер',
  'Робота DIM AUTO',
  'Торговий майданчик DIM',
  'Безпечні угоди',
  'API для розробників',
  'Вікіпедія про DIM AUTO',
  'Партнерська ініціатива',
];

const footerLinks = [
  {
    title: 'Авто',
    links: ['Б/у авто', 'Нові авто', 'Сільгосптехніка'],
  },
  {
    title: 'Послуги',
    links: ['Для авто', 'СТО', 'Сервіси'],
  },
  {
    title: 'Корисне',
    links: ['Новини', 'Тест-драйви', 'Митна інформація'],
  },
  {
    title: 'Про нас',
    links: ['Про проект', 'Контакти'],
  },
];

const footerAvatars = [
  '/papichras.jpg',
  '/mell.jpg',
  '/lyoninbrat.jpeg',
];

const Myfooter = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="support-row">
        <div className="avatars" aria-hidden="true">
          {footerAvatars.map((avatar, index) => (
            <img className="avatar" src={avatar} alt="" key={`${avatar}-${index}`} />
          ))}
        </div>

        <div className="support-text">
          <a href="#support">Служба турботи про користувачів 24/7</a>
          <a href="#help">Допомога по сайту</a>
        </div>
      </div>

      <div className="footer-tags">
        {tags.map((tag) => (
          <a href="#footer" key={tag}>
            {tag}
          </a>
        ))}
      </div>

      <div className="footer-line" />

      <div className="footer-main">
        <div className="footer-columns">
          {footerLinks.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a href="#footer" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="socials">
          <a className="social telegram" href="#telegram" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
          <a className="social instagram" href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a className="social gmail" href="#gmail" aria-label="Gmail">
            <SiGmail />
          </a>
          <a className="social tiktok" href="#tiktok" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a className="social facebook" href="#facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2011–2025 DimAuto.com</p>
        <div>
          <a href="#privacy">Політика конфіденційності</a>
          <span>|</span>
          <a href="#map">Карта сайту</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Myfooter;
