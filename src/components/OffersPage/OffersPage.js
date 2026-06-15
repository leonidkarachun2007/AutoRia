import './OffersPage.css';
import { useState } from 'react';
import {
  FaBalanceScale,
  FaCalendarAlt,
  FaCarSide,
  FaCheckCircle,
  FaChevronDown,
  FaEye,
  FaGasPump,
  FaHeart,
  FaMapMarkerAlt,
  FaRegSave,
  FaTachometerAlt,
  FaTimes,
} from 'react-icons/fa';
import { offerCards, sideFilters } from './data/offersPageData';

const brands = [
  { name: 'BMW', logo: '/bmv-1.svg' },
  { name: 'Audi', logo: '/Audi-Logo_2016.svg' },
  { name: 'Toyota', logo: '/toyota-6.svg' },
  { name: 'Ferrari', logo: '/ferrari-34.svg' },
];

const models = ['Q5', 'A6', 'A7', 'RS Q8'];

const fuelTypes = [
  'Бензин',
  'Дизель',
  'Газ пропан-бутан / Бензин',
  'Газ метан / Бензин',
  'Гібрид (HEV)',
  'Гібрид (PHEV)',
  'Гібрид (MHEV)',
];
const sideTabs = ['Усі', 'Нові', 'Під примусом', 'Б/у'];

const OffersPage = () => {
  const [openedFilter, setOpenedFilter] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [activeSideTab, setActiveSideTab] = useState('Усі');

  const toggleFilter = (filterName) => {
    setOpenedFilter(openedFilter === filterName ? null : filterName);
  };

  const selectBrand = (brand) => {
    setSelectedBrand(brand);
    setOpenedFilter(null);
  };

  const selectModel = (model) => {
    setSelectedModel(model);
    setOpenedFilter(null);
  };

  const selectFuel = (fuel) => {
    setSelectedFuel(fuel);
    setOpenedFilter(null);
  };

  return (
    <main className="offers-page">
      <section className="offers-head">
        <div className="offers-title-row">
          <h1>Пошук уживаних авто в Україні</h1>
          <p>Знайдено 52 676 авто</p>
        </div>

        <div className="filters-row">
          <div className="filter-wrap">
            <button className="filter-btn" type="button" onClick={() => toggleFilter('brand')}>
              <span className="filter-square" />
              <span>{selectedBrand || 'Марка'}</span>
              <FaChevronDown className={openedFilter === 'brand' ? 'chevron open' : 'chevron'} />
            </button>

            {openedFilter === 'brand' && (
              <div className="dropdown">
                {brands.map((brand) => (
                  <button
                    className="dropdown-item"
                    type="button"
                    key={brand.name}
                    onClick={() => selectBrand(brand.name)}
                  >
                    <img className="brand-logo" src={brand.logo} alt="" />
                    <span>{brand.name}</span>
                    <span className="radio-dot" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-wrap">
            <button className="filter-btn" type="button" onClick={() => toggleFilter('model')}>
              <span className="filter-square" />
              <span>{selectedModel || 'Модель'}</span>
              <FaChevronDown className={openedFilter === 'model' ? 'chevron open' : 'chevron'} />
            </button>

            {openedFilter === 'model' && (
              <div className="dropdown">
                {models.map((model) => (
                  <button
                    className="dropdown-item"
                    type="button"
                    key={model}
                    onClick={() => selectModel(model)}
                  >
                    <span className="brand-icon">M</span>
                    <span>{model}</span>
                    <span className="radio-dot" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-wrap">
            <button className="filter-btn" type="button" onClick={() => toggleFilter('price')}>
              <span className="filter-square" />
              <span>Ціна, $</span>
              <FaChevronDown className={openedFilter === 'price' ? 'chevron open' : 'chevron'} />
            </button>

            {openedFilter === 'price' && (
              <div className="dropdown price-dropdown">
                <div className="price-inputs">
                  <input type="text" placeholder="Від" aria-label="Ціна від" />
                  <input type="text" placeholder="До" aria-label="Ціна до" />
                </div>
                <input className="price-range" type="range" min="0" max="100" defaultValue="0" />
              </div>
            )}
          </div>

          <div className="filter-wrap">
            <button className="filter-btn" type="button" onClick={() => toggleFilter('year')}>
              <span className="filter-square" />
              <span>Рік випуску</span>
              <FaChevronDown className={openedFilter === 'year' ? 'chevron open' : 'chevron'} />
            </button>

            {openedFilter === 'year' && (
              <div className="dropdown range-dropdown">
                <div className="range-inputs">
                  <input type="text" placeholder="Від" aria-label="Рік від" />
                  <input type="text" placeholder="До" aria-label="Рік до" />
                </div>
              </div>
            )}
          </div>

          <div className="filter-wrap">
            <button className="filter-btn" type="button" onClick={() => toggleFilter('mileage')}>
              <span className="filter-square" />
              <span>Пробіг</span>
              <FaChevronDown className={openedFilter === 'mileage' ? 'chevron open' : 'chevron'} />
            </button>

            {openedFilter === 'mileage' && (
              <div className="dropdown range-dropdown mileage-dropdown">
                <div className="range-inputs">
                  <input type="text" placeholder="Від" aria-label="Пробіг від" />
                  <input type="text" placeholder="До" aria-label="Пробіг до" />
                </div>
                <button className="no-mileage" type="button">
                  Без пробігу
                </button>
              </div>
            )}
          </div>

          <div className="filter-wrap">
            <button className="filter-btn" type="button" onClick={() => toggleFilter('fuel')}>
              <span className="filter-square" />
              <span>{selectedFuel || 'Тип палива'}</span>
              <FaChevronDown className={openedFilter === 'fuel' ? 'chevron open' : 'chevron'} />
            </button>

            {openedFilter === 'fuel' && (
              <div className="dropdown fuel-dropdown">
                {fuelTypes.map((fuel) => (
                  <button
                    className="fuel-item"
                    type="button"
                    key={fuel}
                    onClick={() => selectFuel(fuel)}
                  >
                    <span>{fuel}</span>
                    <span className="radio-dot" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="selected-row">
          <div className="selected-tags">
            {selectedBrand && (
              <button className="tag" type="button">
                {selectedBrand}
                <FaTimes />
              </button>
            )}
            {selectedModel && (
              <button className="tag" type="button">
                {selectedModel}
                <FaTimes />
              </button>
            )}
            <button className="tag" type="button">
              2020-2023
              <FaTimes />
            </button>
            {selectedFuel && (
              <button className="tag" type="button">
                {selectedFuel}
                <FaTimes />
              </button>
            )}
            <button className="clear-btn" type="button">
              Очистити все
            </button>
          </div>

          <button className="all-filters" type="button">
            <span className="filter-square" />
            Усі фільтри
          </button>
        </div>
      </section>

      <section className="offers-content">
        <aside className="side-panel">
          <div className="side-title">
            <h2>Усі фільтри</h2>
            <FaTimes />
          </div>

          <div className="side-tabs">
            {sideTabs.map((tab) => (
              <button
                className={activeSideTab === tab ? 'side-tab active-side-tab' : 'side-tab'}
                type="button"
                key={tab}
                onClick={() => setActiveSideTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="side-filter-list">
            {sideFilters.map((filter) => (
              <button className="side-filter" type="button" key={filter}>
                <FaCarSide className="side-filter-icon" />
                <span>{filter}</span>
                <FaChevronDown className="side-filter-arrow" />
              </button>
            ))}
          </div>
        </aside>

        <div className="offer-list">
          {offerCards.map((car) => (
            <article className="offer-card" key={car.title}>
              <div className="offer-gallery">
                <img className="offer-main-img" src={car.image} alt={car.title} />
                <div className="offer-thumbs">
                  {car.thumbs.map((thumb) => (
                    <img src={thumb} alt="" key={thumb} />
                  ))}
                </div>
              </div>

              <div className="offer-info">
                <h2>{car.title}</h2>
                <p className="offer-subtitle">{car.subtitle}</p>

                <div className="offer-details">
                  <p>
                    <FaCalendarAlt />
                    {car.details[0]}
                  </p>
                  <p>
                    <FaTachometerAlt />
                    {car.details[1]}
                  </p>
                  <p>
                    <FaGasPump />
                    {car.details[2]}
                  </p>
                  <p>
                    <FaMapMarkerAlt />
                    {car.details[3]}
                  </p>
                </div>
              </div>

              <div className="offer-extra">
                <div className="badges">
                  {car.badges.map((badge, index) => (
                    <span className="badge" key={badge}>
                      {index === 0 && <FaCheckCircle />}
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="offer-stats">
                  <span>
                    <FaEye />
                    {car.views}
                  </span>
                  <span>
                    <FaRegSave />
                    {car.saves}
                  </span>
                </div>
              </div>

              <div className="offer-price">
                <strong>{car.price}</strong>
                <span>{car.date}</span>
              </div>

              <div className="offer-actions">
                <button type="button">
                  <FaBalanceScale />
                  Порівняти
                </button>
                <button type="button">
                  <FaHeart />
                  В обрані
                </button>
                <button type="button">
                  <FaEye />
                  Швидкий предпрегляд
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OffersPage;
