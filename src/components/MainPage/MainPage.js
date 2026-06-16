import './MainPage.css';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaChevronDown, FaGasPump, FaHeart, FaMapMarkerAlt, FaRegHeart, FaTachometerAlt } from 'react-icons/fa';
import {
  autoNews,
  promoCards,
  recommendedCars,
} from './data/mainPageData';
import {
  transmissionTypes,
  transportTypes,
  ukrainianCities,
} from '../OffersPage/data/offersPageData';

const brands = [
  { name: 'BMW', logo: '/bmv-1.svg' },
  { name: 'Audi', logo: '/Audi-Logo_2016.svg' },
  { name: 'Toyota', logo: '/toyota-6.svg' },
  { name: 'Ferrari', logo: '/ferrari-34.svg' },
];

const fuelTypes = [
  'Бензин',
  'Дизель',
  'Газ пропан-бутан / Бензин',
  'Газ метан / Бензин',
  'Гібрид (HEV)',
  'Гібрид (PHEV)',
  'Гібрид (MHEV)',
];

const quickTabs = ['Усі', 'Нові', 'Під примусом', 'Б/у'];

const MainPage = ({ searchPlaceholder = 'Toyota Land Cruiser 300' }) => {
  const [activeQuickTab, setActiveQuickTab] = useState('Усі');
  const [openedQuickField, setOpenedQuickField] = useState(null);
  const [quickValues, setQuickValues] = useState({});
  const [priceCurrency, setPriceCurrency] = useState('₴');

  const toggleQuickField = (fieldName) => {
    setOpenedQuickField(openedQuickField === fieldName ? null : fieldName);
  };

  const selectQuickValue = (fieldName, value) => {
    setQuickValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }));
  };

  const simpleDropdown = (fieldName, items, options = {}) => (
    <div className={openedQuickField === fieldName ? 'quick-dropdown open' : 'quick-dropdown'}>
      {items.map((item) => {
        const label = typeof item === 'string' ? item : item.title || item.name;
        const image = item.logo;

        return (
          <button
            className="quick-option"
            type="button"
            key={label}
            onClick={() => selectQuickValue(fieldName, label)}
          >
            {image && <img className="quick-logo" src={image} alt="" />}
            <span>{label}</span>
            <span className={options.round ? 'quick-circle' : 'quick-check'} />
          </button>
        );
      })}
    </div>
  );

  const quickFields = [
    {
      name: 'transport',
      title: 'Тип транспорту',
      content: simpleDropdown('transport', transportTypes, { round: true }),
    },
    {
      name: 'brand',
      title: 'Марка',
      content: simpleDropdown('brand', brands, { round: true }),
    },
    {
      name: 'year',
      title: 'Рік випуску',
      content: (
        <div className={openedQuickField === 'year' ? 'quick-dropdown quick-range open' : 'quick-dropdown quick-range'}>
          <input type="text" placeholder="Від" aria-label="Рік від" />
          <input type="text" placeholder="До" aria-label="Рік до" />
          <button className="quick-ok" type="button">
            Ок
          </button>
        </div>
      ),
    },
    {
      name: 'price',
      title: 'Ціна, $',
      content: (
        <div className={openedQuickField === 'price' ? 'quick-dropdown price-menu open' : 'quick-dropdown price-menu'}>
          <div className="price-inputs">
            <input type="text" placeholder="Від" aria-label="Ціна від" />
            <input type="text" placeholder="До" aria-label="Ціна до" />
          </div>
          <input className="quick-price-range" type="range" min="0" max="100" defaultValue="0" />
          <div className="currency-row">
            {['$', '₴', '€'].map((currency) => (
              <button
                className={priceCurrency === currency ? 'currency active' : 'currency'}
                type="button"
                key={currency}
                onClick={() => setPriceCurrency(currency)}
              >
                {currency}
              </button>
            ))}
            <button className="quick-ok" type="button">
              Ок
            </button>
          </div>
        </div>
      ),
    },
    {
      name: 'city',
      title: 'Місто',
      content: simpleDropdown('city', ukrainianCities),
    },
    {
      name: 'fuel',
      title: 'Тип палива',
      content: simpleDropdown('fuel', fuelTypes),
    },
    {
      name: 'transmission',
      title: 'Коробка передач',
      content: simpleDropdown('transmission', transmissionTypes.filter((item) => item !== 'Седан')),
    },
  ];

  return (
    <main className="main-page">
      <section className="container search-area">
        <h1 className="title">Пошук</h1>
        <label className="search-box">
          <IoSearchOutline className="search-icon" aria-hidden="true" />
          <input
            className="search-input"
            type="search"
            placeholder={searchPlaceholder}
          />
        </label>
      </section>

    <section className="quick-search" aria-labelledby="quick-search-title">
      <div className="quick-top">
        <h2 id="quick-search-title" className="title">
          Швидкий пошук
        </h2>
        <div className="tabs" aria-label="Тип авто">
          {quickTabs.map((tab) => (
            <button
              className={activeQuickTab === tab ? 'tab active-tab' : 'tab'}
              type="button"
              key={tab}
              onClick={() => setActiveQuickTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="fields">
        {quickFields.map((field) => (
          <div className="quick-field" key={field.name}>
            <button
              className="field"
              type="button"
              onClick={() => toggleQuickField(field.name)}
            >
              <span>{quickValues[field.name] || field.title}</span>
              <FaChevronDown className={openedQuickField === field.name ? 'quick-arrow open' : 'quick-arrow'} />
            </button>
            {field.content}
          </div>
        ))}
      </div>

      <div className="quick-bottom">
        <button className="main-field" type="button">
          Шукати
        </button>
        <button className="more-search" type="button">
          Розширений пошук
        </button>
      </div>
    </section>

    <section className="container promos" aria-labelledby="promos-title">
      <h2 id="promos-title" className="title">
        Акції на Dim Auto
      </h2>
      <div className="promo-list">
        {promoCards.map((card) => (
          <article className="promo-card" key={card.title}>
            <img className="promo-img" src={card.image} alt="" />
            <div className="promo-info">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="container cars" aria-labelledby="cars-title">
      <h2 id="cars-title" className="title">
        Рекомендації
      </h2>
      <div className="car-list">
        {recommendedCars.map((car) => (
          <article className="car-card" key={car.name}>
            <div className="car-photo">
              {car.image && <img src={car.image} alt={car.name} />}
              <button className="like-btn" type="button" aria-label="Додати в обране">
                <FaRegHeart className="heart-outline" />
                <FaHeart className="heart-fill" />
              </button>
            </div>

            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="car-price">{car.price}</p>

              <div className="car-details">
                <p>
                  <FaTachometerAlt />
                  {car.mileage}
                </p>
                <p>
                  <span className="auto-icon">A</span>
                  {car.gearbox}
                </p>
                <p>
                  <FaGasPump />
                  {car.fuel}
                </p>
                <p>
                  <FaMapMarkerAlt />
                  {car.city}
                </p>
              </div>

              <p className="car-date">{car.date}</p>
            </div>
          </article>
        ))}
      </div>

      <button className="show-more" type="button">
        Показати ще
      </button>
    </section>

    <section className="container news" aria-labelledby="news-title">
      <h2 id="news-title" className="title">
        Новини про авто
      </h2>

      <div className="news-content">
        <article className="big-news">
          {autoNews.main.image && (
            <img className="big-news-img" src={autoNews.main.image} alt="" />
          )}
          <div className="big-news-text">
            <p>{autoNews.main.title}</p>
            <h3>{autoNews.main.accent}</h3>
          </div>
        </article>

        <div className="news-side">
          {autoNews.items.map((item) => (
            <article className="news-item" key={item.title}>
              <div className="news-img">
                {item.image && <img src={item.image} alt="" />}
              </div>
              <div className="news-info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}

          <button className="read-all" type="button">
            Читати все
          </button>
        </div>
      </div>
    </section>
  </main>
  );
};

export default MainPage;
