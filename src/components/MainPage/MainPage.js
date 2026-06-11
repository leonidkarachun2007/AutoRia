import './MainPage.css';
import { IoSearchOutline } from 'react-icons/io5';
import { FaGasPump, FaHeart, FaMapMarkerAlt, FaRegHeart, FaTachometerAlt } from 'react-icons/fa';

const MainPage = ({
  autoNews,
  quickFields,
  promoCards,
  recommendedCars,
  searchPlaceholder,
}) => (
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
          <button className="tab active-tab" type="button">
            Усі
          </button>
          <button className="tab" type="button">
            Нові
          </button>
          <button className="tab" type="button">
            Під примусом
          </button>
          <button className="tab" type="button">
            Б/у
          </button>
        </div>
      </div>

      <div className="fields">
        {quickFields.map((field) => (
          <button className="field" type="button" key={field} aria-label={field} />
        ))}
      </div>

      <div className="quick-bottom">
        <button className="main-field" type="button" aria-label="Почати пошук" />
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

export default MainPage;
