import { useEffect, useMemo, useRef, useState } from 'react';
import './Faq.css';
import { FaSearch } from "react-icons/fa";

const helpArticles = {
  "Як знайти автомобіль за параметрами?": {
    title: "Як знайти автомобіль за параметрами?",
    text: "Щоб швидко знайти потрібний автомобіль, скористайтеся системою пошуку на головній сторінці сайту. Ви можете вказати марку, модель, рік випуску, тип палива, коробку передач, пробіг, ціну та інші характеристики. Чим більше параметрів буде обрано, тим точнішими будуть результати пошуку. Також ви можете скористатися додатковими фільтрами для ще більш точного підбору автомобіля.",
    secondText: "Система покаже автомобілі за обраними параметрами, а результати можна відсортувати за ціною, роком випуску чи датою додавання. Для зручності ви можете зберегти параметри пошуку або додати цікаві оголошення до обраного."
  }
};

function MobileSearchGuide() {
  const fields = [
    'Тип транспорту',
    'Марка',
    'Рік випуску',
    'Ціна, $',
    'Місто',
    'Тип палива',
    'Коробка передач',
  ];

  return (
    <div className="mobile-guide mobile-search-guide">
      <h3>Швидкий пошук</h3>
      <div className="mobile-tabs">
        <span>Усі</span>
        <span>Нові</span>
        <span>Під примусом</span>
        <span>Б/у</span>
      </div>
      <div className="mobile-fields">
        {fields.map(field => (
          <button type="button" key={field}>
            {field}
            <span>⌄</span>
          </button>
        ))}
      </div>
      <button className="mobile-search-button" type="button">Шукати</button>
    </div>
  );
}

function MobileOffersGuide() {
  return (
    <div className="mobile-guide mobile-offers-guide">
      <h3>Пошук вживаних авто в Україні</h3>
      <button className="mobile-filter-button" type="button">Фільтри</button>
      <div className="mobile-tags">
        <span>Audi ×</span>
        <span>Q5 ×</span>
        <span>2020-2023 ×</span>
        <span>Бензин ×</span>
      </div>
      <p>Знайдено 52 676 авто</p>
    </div>
  );
}

function ArticlePanel({ article, onClose, articleRef }) {
  if (!article) {
    return <aside className="faq-article" aria-hidden="true"></aside>;
  }

  return (
    <aside className="faq-article faq-article--visible" ref={articleRef}>
      <button className="article-close" type="button" onClick={onClose} aria-label="Закрити статтю">
        ×
      </button>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <img
        className="faq-guide-image"
        src={`${process.env.PUBLIC_URL}/image%2038.png`}
        alt="Приклад швидкого пошуку автомобіля"
      />
      <MobileSearchGuide />
      <p>{article.secondText}</p>
      <img
        className="faq-guide-image faq-guide-image--cars"
        src={`${process.env.PUBLIC_URL}/Rectangle%2046.png`}
        alt="Приклад сторінки з автомобілями"
      />
      <MobileOffersGuide />
    </aside>
  );
}

function FaqItem({ title, content, activeQuestion, onQuestionClick, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const questions = content
    .split('\n')
    .map(question => question.trim())
    .filter(Boolean);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(prev => !prev)}>
        <span>{title}</span>
        <svg
          className={`faq-arrow ${open ? 'faq-arrow--open' : ''}`}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <path d="M4 7L10 13L16 7" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`faq-answer ${open ? 'faq-answer--open' : ''}`}>
        {questions.map(question => (
          <button
            key={question}
            type="button"
            className={`faq-answer-link ${activeQuestion === question ? 'faq-answer-link--active' : ''}`}
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Faq({ items }) {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const articleRef = useRef(null);
  const activeArticle = useMemo(() => (
    activeQuestion
      ? helpArticles[activeQuestion] || {
        title: activeQuestion,
        text: "Цей розділ допоможе швидко розібратися з потрібною дією на сайті. Оберіть потрібний пункт, уважно перегляньте підказки та повторіть кроки на відповідній сторінці.",
        secondText: "Якщо питання залишиться відкритим, зверніться до служби підтримки або перегляньте сусідні теми довідкового центру."
      }
      : null
  ), [activeQuestion]);

  useEffect(() => {
    if (!activeArticle || !articleRef.current) {
      return;
    }

    if (window.matchMedia('(max-width: 600px)').matches) {
      setTimeout(() => {
        articleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  }, [activeArticle]);

  return (
    <div className="Faq">
      <h1>Довідковий центр</h1>
      <div id="container_support2">
        <FaSearch className="support-search-icon" />
        <input type="text" placeholder="Пошук" />
      </div>

      <div className="faq-workspace">
        <div className={`faq-list ${activeArticle ? 'faq-list--shifted' : ''}`}>
          {items.map((item, index) => (
            <FaqItem
              key={item.id}
              title={item.title}
              content={item.content}
              activeQuestion={activeQuestion}
              onQuestionClick={setActiveQuestion}
              defaultOpen={index === 0}
            />
          ))}
        </div>
        <ArticlePanel article={activeArticle} onClose={() => setActiveQuestion(null)} articleRef={articleRef} />
      </div>
    </div>
  );
}

export default Faq;
