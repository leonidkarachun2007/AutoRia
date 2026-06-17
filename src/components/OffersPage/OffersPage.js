import './OffersPage.css';
import { useState } from 'react';
import {
  FaBalanceScale,
  FaBus,
  FaCalendarAlt,
  FaCarSide,
  FaCheckCircle,
  FaChevronDown,
  FaEye,
  FaGasPump,
  FaHeart,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaPlane,
  FaRegSave,
  FaShip,
  FaTachometerAlt,
  FaTimes,
  FaTractor,
} from 'react-icons/fa';
import {
  bodyTypes,
  carColors,
  comfortFilters,
  customsOptions,
  driveTypes,
  freeLandCheckOptions,
  historyConditionOptions,
  historyStorageOptions,
  importCountries,
  locationTypes,
  offerCards,
  ownerOptions,
  sellerOptions,
  sideFilters,
  transmissionTypes,
  transportTypes,
  ukrainianCities,
  vinCheckOptions,
} from './data/offersPageData';

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
const transportIcons = {
  cars: FaCarSide,
  car: FaCarSide,
  moto: FaMotorcycle,
  tractor: FaTractor,
  bus: FaBus,
  ship: FaShip,
  plane: FaPlane,
};

const OffersPage = () => {
  const [openedFilter, setOpenedFilter] = useState(null);
  const [openedSideFilter, setOpenedSideFilter] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedDrive, setSelectedDrive] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [engineFrom, setEngineFrom] = useState('');
  const [engineTo, setEngineTo] = useState('');
  const [powerFrom, setPowerFrom] = useState('');
  const [powerTo, setPowerTo] = useState('');
  const [powerUnit, setPowerUnit] = useState('к.с.');
  const [openedComfortSelect, setOpenedComfortSelect] = useState(null);
  const [selectedComfortItems, setSelectedComfortItems] = useState([]);
  const [openedHistorySelect, setOpenedHistorySelect] = useState(null);
  const [selectedAccident, setSelectedAccident] = useState('Усі');
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState('1');
  const [selectedSeller, setSelectedSeller] = useState('Усі');
  const [selectedCustoms, setSelectedCustoms] = useState('Усі');
  const [selectedVinOptions, setSelectedVinOptions] = useState([]);
  const [selectedFreeLandOptions, setSelectedFreeLandOptions] = useState([]);
  const [selectedImportedView, setSelectedImportedView] = useState('Усі');
  const [openedCountryList, setOpenedCountryList] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [openedRegionSelect, setOpenedRegionSelect] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
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

  const toggleSideFilter = (filterName) => {
    setOpenedSideFilter(openedSideFilter === filterName ? null : filterName);
  };

  const toggleRegionSelect = (selectName) => {
    setOpenedRegionSelect(openedRegionSelect === selectName ? null : selectName);
  };

  const toggleComfortSelect = (selectName) => {
    setOpenedComfortSelect(openedComfortSelect === selectName ? null : selectName);
  };

  const toggleComfortItem = (item) => {
    setSelectedComfortItems((currentItems) =>
      currentItems.includes(item)
        ? currentItems.filter((currentItem) => currentItem !== item)
        : [...currentItems, item]
    );
  };

  const toggleHistorySelect = (selectName) => {
    setOpenedHistorySelect(openedHistorySelect === selectName ? null : selectName);
  };

  const toggleCondition = (condition) => {
    setSelectedConditions((currentConditions) =>
      currentConditions.includes(condition)
        ? currentConditions.filter((currentCondition) => currentCondition !== condition)
        : [...currentConditions, condition]
    );
  };

  const toggleStorage = (option) => {
    setSelectedStorage((currentOptions) =>
      currentOptions.includes(option)
        ? currentOptions.filter((currentOption) => currentOption !== option)
        : [...currentOptions, option]
    );
  };

  const toggleVinOption = (option) => {
    setSelectedVinOptions((currentOptions) =>
      currentOptions.includes(option)
        ? currentOptions.filter((currentOption) => currentOption !== option)
        : [...currentOptions, option]
    );
  };

  const toggleFreeLandOption = (option) => {
    setSelectedFreeLandOptions((currentOptions) =>
      currentOptions.includes(option)
        ? currentOptions.filter((currentOption) => currentOption !== option)
        : [...currentOptions, option]
    );
  };

  const toggleCountry = (country) => {
    setSelectedCountries((currentCountries) =>
      currentCountries.includes(country)
        ? currentCountries.filter((currentCountry) => currentCountry !== country)
        : [...currentCountries, country]
    );
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
            {sideFilters.map((filter) => {
              const isTransport = filter === 'Тип транспорту';
              const isBodyType = filter === 'Тип кузова';
              const isRegion = filter === 'Регіон';
              const isTransmission = filter === 'Коробка передач';
              const isDrive = filter === 'Привід';
              const isColor = filter === 'Колір';
              const isEngineSize = filter === 'Об’єм двигуна, л';
              const isPower = filter === 'Потужність, к.с.';
              const isComfort = filter === 'Салон та комфорт';
              const isHistory = filter === 'Стан та історія авто';
              const isCustoms = filter === 'Розмитнення';
              const isVin = filter === 'VIN-код';
              const isImportCountry = filter === 'Країна пригону';
              const isClickableFilter =
                isTransport ||
                isBodyType ||
                isRegion ||
                isTransmission ||
                isDrive ||
                isColor ||
                isEngineSize ||
                isPower ||
                isComfort ||
                isHistory ||
                isCustoms ||
                isVin ||
                isImportCountry;
              const isOpen = openedSideFilter === filter;
              const SideIcon = isRegion ? FaMapMarkerAlt : FaCarSide;

              return (
                <div className="side-filter-box" key={filter}>
                  <button
                    className="side-filter"
                    type="button"
                    onClick={() => isClickableFilter && toggleSideFilter(filter)}
                  >
                    <SideIcon className="side-filter-icon" />
                    <span>{filter}</span>
                    <FaChevronDown className={isOpen ? 'side-filter-arrow open' : 'side-filter-arrow'} />
                  </button>

                  {isTransport && (
                    <div className={isOpen ? 'transport-list open' : 'transport-list'}>
                      {transportTypes.map((transport) => {
                        const TransportIcon = transportIcons[transport.icon] || FaCarSide;
                        const isSelected = selectedTransport === transport.title;

                        return (
                          <button
                            className="transport-item"
                            type="button"
                            key={transport.title}
                            onClick={() => setSelectedTransport(transport.title)}
                          >
                            <TransportIcon className="transport-icon" />
                            <span>{transport.title}</span>
                            <span className={isSelected ? 'transport-circle active' : 'transport-circle'} />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {isBodyType && (
                    <div className={isOpen ? 'body-list open' : 'body-list'}>
                      {bodyTypes.map((bodyType) => {
                        const isSelected = selectedBodyType === bodyType;

                        return (
                          <button
                            className="body-item"
                            type="button"
                            key={bodyType}
                            onClick={() => setSelectedBodyType(bodyType)}
                          >
                            <span>{bodyType}</span>
                            <span className={isSelected ? 'body-check active' : 'body-check'} />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {isTransmission && (
                    <div className={isOpen ? 'body-list open' : 'body-list'}>
                      {transmissionTypes.map((transmission) => {
                        const isSelected = selectedTransmission === transmission;

                        return (
                          <button
                            className="body-item"
                            type="button"
                            key={transmission}
                            onClick={() => setSelectedTransmission(transmission)}
                          >
                            <span>{transmission}</span>
                            <span className={isSelected ? 'body-check active' : 'body-check'} />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {isDrive && (
                    <div className={isOpen ? 'body-list small open' : 'body-list small'}>
                      {driveTypes.map((drive) => {
                        const isSelected = selectedDrive === drive;

                        return (
                          <button
                            className="body-item"
                            type="button"
                            key={drive}
                            onClick={() => setSelectedDrive(drive)}
                          >
                            <span>{drive}</span>
                            <span className={isSelected ? 'body-check active' : 'body-check'} />
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {isColor && (
                    <div className={isOpen ? 'color-list open' : 'color-list'}>
                      {carColors.map((color) => (
                        <button
                          className={selectedColor === color.title ? 'color-dot active' : 'color-dot'}
                          type="button"
                          key={color.title}
                          aria-label={color.title}
                          title={color.title}
                          style={{ backgroundColor: color.value }}
                          onClick={() => setSelectedColor(color.title)}
                        />
                      ))}
                    </div>
                  )}

                  {isEngineSize && (
                    <div className={isOpen ? 'side-range open' : 'side-range'}>
                      <input
                        type="text"
                        placeholder="Від"
                        value={engineFrom}
                        aria-label="Об’єм двигуна від"
                        onChange={(event) => setEngineFrom(event.target.value)}
                      />
                      <span className="range-line" />
                      <input
                        type="text"
                        placeholder="До"
                        value={engineTo}
                        aria-label="Об’єм двигуна до"
                        onChange={(event) => setEngineTo(event.target.value)}
                      />
                    </div>
                  )}

                  {isPower && (
                    <div className={isOpen ? 'power-box open' : 'power-box'}>
                      <div className="side-range power-range">
                        <input
                          type="text"
                          placeholder="Від"
                          value={powerFrom}
                          aria-label="Потужність від"
                          onChange={(event) => setPowerFrom(event.target.value)}
                        />
                        <span className="range-line" />
                        <input
                          type="text"
                          placeholder="До"
                          value={powerTo}
                          aria-label="Потужність до"
                          onChange={(event) => setPowerTo(event.target.value)}
                        />
                      </div>

                      <div className="unit-tabs">
                        {['к.с.', 'кВт'].map((unit) => (
                          <button
                            className={powerUnit === unit ? 'unit-tab active' : 'unit-tab'}
                            type="button"
                            key={unit}
                            onClick={() => setPowerUnit(unit)}
                          >
                            {unit}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {isComfort && (
                    <div className={isOpen ? 'comfort-box open' : 'comfort-box'}>
                      {comfortFilters.map((comfortFilter) => {
                        const isComfortOpen = openedComfortSelect === comfortFilter.title;

                        return (
                          <div className="comfort-select-wrap" key={comfortFilter.title}>
                            <button
                              className="comfort-select"
                              type="button"
                              onClick={() => toggleComfortSelect(comfortFilter.title)}
                            >
                              <span>{comfortFilter.title}</span>
                              <FaChevronDown className={isComfortOpen ? 'chevron open' : 'chevron'} />
                            </button>

                            <div className={isComfortOpen ? 'comfort-dropdown open' : 'comfort-dropdown'}>
                              {comfortFilter.items.map((item) => {
                                const isSelected = selectedComfortItems.includes(item);

                                return (
                                  <button
                                    className="comfort-option"
                                    type="button"
                                    key={item}
                                    onClick={() => toggleComfortItem(item)}
                                  >
                                    <span>{item}</span>
                                    <span className={isSelected ? 'body-check active' : 'body-check'} />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {isHistory && (
                    <div className={isOpen ? 'history-box open' : 'history-box'}>
                      <div className="history-group">
                        <h3>ДТП</h3>
                        <div className="history-tabs">
                          {['Усі', 'ДТП', 'Без ДТП'].map((option) => (
                            <button
                              className={selectedAccident === option ? 'history-chip active' : 'history-chip'}
                              type="button"
                              key={option}
                              onClick={() => setSelectedAccident(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="history-group">
                        <h3>Стан</h3>
                        <button
                          className="history-select"
                          type="button"
                          onClick={() => toggleHistorySelect('condition')}
                        >
                          <span>Стан авто</span>
                          <FaChevronDown className={openedHistorySelect === 'condition' ? 'chevron open' : 'chevron'} />
                        </button>

                        <div className={openedHistorySelect === 'condition' ? 'history-dropdown open' : 'history-dropdown'}>
                          {historyConditionOptions.map((condition) => {
                            const isSelected = selectedConditions.includes(condition);

                            return (
                              <button
                                className="history-option"
                                type="button"
                                key={condition}
                                onClick={() => toggleCondition(condition)}
                              >
                                <span>{condition}</span>
                                <span className={isSelected ? 'body-check active' : 'body-check'} />
                              </button>
                            );
                          })}
                        </div>

                        <div className="history-storage">
                          {historyStorageOptions.map((option) => (
                            <button
                              className={selectedStorage.includes(option) ? 'history-chip active' : 'history-chip'}
                              type="button"
                              key={option}
                              onClick={() => toggleStorage(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="history-group">
                        <h3>Кількість власників</h3>
                        <div className="history-tabs">
                          {ownerOptions.map((owner) => (
                            <button
                              className={selectedOwner === owner ? 'history-chip square active' : 'history-chip square'}
                              type="button"
                              key={owner}
                              onClick={() => setSelectedOwner(owner)}
                            >
                              {owner}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="history-group">
                        <h3>Продавець</h3>
                        <div className="history-tabs wrap">
                          {sellerOptions.map((seller) => (
                            <button
                              className={selectedSeller === seller ? 'history-chip active' : 'history-chip'}
                              type="button"
                              key={seller}
                              onClick={() => setSelectedSeller(seller)}
                            >
                              {seller}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {isCustoms && (
                    <div className={isOpen ? 'customs-box open' : 'customs-box'}>
                      <h3>Стан автомобіля</h3>
                      <div className="history-tabs wrap">
                        {customsOptions.map((option) => (
                          <button
                            className={selectedCustoms === option ? 'history-chip active' : 'history-chip'}
                            type="button"
                            key={option}
                            onClick={() => setSelectedCustoms(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {isVin && (
                    <div className={isOpen ? 'vin-box open' : 'vin-box'}>
                      <div className="vin-group">
                        <h3>Перевірки</h3>
                        <div className="history-tabs wrap">
                          {vinCheckOptions.map((option) => (
                            <button
                              className={selectedVinOptions.includes(option) ? 'history-chip active' : 'history-chip'}
                              type="button"
                              key={option}
                              onClick={() => toggleVinOption(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="vin-group">
                        <h3>Перевірки від FreeLand</h3>
                        <div className="history-tabs wrap">
                          {freeLandCheckOptions.map((option) => (
                            <button
                              className={selectedFreeLandOptions.includes(option) ? 'history-chip active' : 'history-chip'}
                              type="button"
                              key={option}
                              onClick={() => toggleFreeLandOption(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {isImportCountry && (
                    <div className={isOpen ? 'country-box open' : 'country-box'}>
                      <h3>Пригнані авто</h3>
                      <div className="history-tabs wrap">
                        {['Усі', 'Показати', 'Приховати'].map((option) => (
                          <button
                            className={selectedImportedView === option ? 'history-chip active' : 'history-chip'}
                            type="button"
                            key={option}
                            onClick={() => setSelectedImportedView(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>

                      <button
                        className="country-select"
                        type="button"
                        onClick={() => setOpenedCountryList(!openedCountryList)}
                      >
                        <span>{selectedCountries[0] || 'Країна пригону'}</span>
                        <FaChevronDown className={openedCountryList ? 'chevron open' : 'chevron'} />
                      </button>

                      <div className={openedCountryList ? 'country-dropdown open' : 'country-dropdown'}>
                        {importCountries.map((country) => (
                          <button
                            className="region-option"
                            type="button"
                            key={country}
                            onClick={() => toggleCountry(country)}
                          >
                            <span>{country}</span>
                            <span className={selectedCountries.includes(country) ? 'body-check active' : 'body-check'} />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {isRegion && (
                    <div className={isOpen ? 'region-box open' : 'region-box'}>
                      <div className="region-select-wrap">
                        <button
                          className="region-select"
                          type="button"
                          onClick={() => toggleRegionSelect('city')}
                        >
                          <span>{selectedCity || 'Місто'}</span>
                          <FaChevronDown className={openedRegionSelect === 'city' ? 'chevron open' : 'chevron'} />
                        </button>

                        <div className={openedRegionSelect === 'city' ? 'region-dropdown open' : 'region-dropdown'}>
                          {ukrainianCities.map((city) => (
                            <button
                              className="region-option"
                              type="button"
                              key={city}
                              onClick={() => setSelectedCity(city)}
                            >
                              <span>{city}</span>
                              <span className={selectedCity === city ? 'body-check active' : 'body-check'} />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="region-select-wrap">
                        <button
                          className="region-select"
                          type="button"
                          onClick={() => toggleRegionSelect('location')}
                        >
                          <span>{selectedLocation || 'Розташування'}</span>
                          <FaChevronDown className={openedRegionSelect === 'location' ? 'chevron open' : 'chevron'} />
                        </button>

                        <div className={openedRegionSelect === 'location' ? 'location-dropdown open' : 'location-dropdown'}>
                          {locationTypes.map((location) => (
                            <button
                              className="region-option"
                              type="button"
                              key={location}
                              onClick={() => setSelectedLocation(location)}
                            >
                              <span>{location}</span>
                              <span className={selectedLocation === location ? 'transport-circle active' : 'transport-circle'} />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
