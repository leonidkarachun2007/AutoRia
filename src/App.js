import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Myfooter from './components/Myfooter/Myfooter';
import Myheader from './components/Myheader/Myheader';
import Faq from './components/Faq/Faq';
import Profile from './components/Profile/Profile';
import OffersPage from './components/OffersPage/OffersPage';
import Mywishlist from './components/Mywishlist/Mywishlist';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';

const faqItems = [
  { id: 1, title: "Купівля автомобіля", content: "Як знайти автомобіль за параметрами?\nЯк зв'язатися з продавцем?\nЯк перевірити історію автомобіля?\nЯк зберегти оголошення в обране?" },
  { id: 2, title: "Продаж автомобіля", content: "Як створити оголошення про продаж?\nЯкі фото варто додати до оголошення?\nЯк відредагувати своє оголошення?\nЯк видалити оголошення?" },
    { id: 3, title: "Обліковий запис", content: "Як зареєструватися на сайті?\nЯк увійти до свого акаунта?\nЯк відновити пароль?\nЯк видалити обліковий запис?" },
      { id: 4, title: "Обране та порівняння", content: "Як додати авто в обране?\nДе знайти збережені оголошення?\nЯк видалити авто з обраного?\nЯк порівняти кілька автомобілів?" },
        { id: 5, title: "Безпека", content: "Які дані не можна повідомляти стороннім?\nЯк поскаржитися на користувача?\nЯк повідомити про підозріле оголошення?\nЯк убезпечити себе під час купівлі авто?" },
         { id: 6, title: "Служба підтримки", content: "Як звернутися до служби підтримки?\nСкільки часу розглядається звернення?\nЯк перевірити статус звернення?\nЯк повідомити про помилку на сайті?" },
          { id: 7, title: "Оплата послуг", content: "Які способи оплати доступні?\nЯк оплатити послугу просування?\nЧи можна повернути кошти?\nЩо робити, якщо оплата не пройшла?" },
           { id: 8, title: "Просування оголошень", content: "Як зробити оголошення помітнішим?\nЯк переглянути статистику оголошення?\nСкільки діє послуга просування?\nЯк підняти оголошення в пошуку?" },
            { id: 9, title: "Сповіщення та налаштування", content: "Як налаштувати сповіщення?\nЯк вимкнути повідомлення?\nЯк змінити мову сайту?\nЯк налаштувати параметри пошуку?" },
            { id: 10, title: "Робота із сайтом", content: "Чому не завантажуються фотографії?\nЩо робити, якщо сайт працює повільно?\nЧому не відкривається сторінка?\nЯкі браузери підтримуються сайтом?" }
        
];

function App() {
  return (
    <div className="App">
      <Myheader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/wishlist" element={<Mywishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Faq items={faqItems} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Myfooter />
    </div>
  );
}

export default App;
