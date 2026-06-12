import './App.css';
import Myfooter from './components/Myfooter/Myfooter';
import Myheader from './components/Myheader/Myheader';
import MainPage from './components/MainPage/MainPage';
import {
  autoNews,
  promoCards,
  quickFields,
  recommendedCars,
} from './components/MainPage/data/mainPageData';
import Mywishlist from './components/Mywishlist/Mywishlist';

function App() {
  return (
    <div className="App">
      <Myheader />
      {/* <MainPage
        quickFields={quickFields}
        promoCards={promoCards}
        recommendedCars={recommendedCars}
        autoNews={autoNews}
        searchPlaceholder="Toyota Land Cruiser 300"
      /> */}
      <Mywishlist/>
      <Myfooter />
    </div>
  );
}

export default App;
