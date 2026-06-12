import { useState } from 'react';
import './Faq.css';
import { FaSearch } from "react-icons/fa";

function FaqItem({ title, content }) {
  const [open, setOpen] = useState(false);

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
        <p>{content}</p>
      </div>
    </div>
  );
}

export function Faq({ items }) {
  return (
    <div className="Faq">
      <h1>Довідковий центр</h1>
      <div id="container_support2">
        <FaSearch className="support-search-icon" />
        <input type="text" placeholder="Find help" />
      </div>

      <div className="faq-list">
        {items.map(item => (
          <FaqItem key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default Faq;