import './App.css';
import MainPage from './components/MainPage/MainPage';
import Myfooter from './components/Myfooter/Myfooter';
import Myheader from './components/Myheader/Myheader';
import {
  autoNews,
  promoCards,
  quickFields,
  recommendedCars,
} from './components/MainPage/data/mainPageData';

function App() {
  return (
    <div className="App">
      <Myheader />
      <MainPage
        quickFields={quickFields}
        promoCards={promoCards}
        recommendedCars={recommendedCars}
        autoNews={autoNews}
        searchPlaceholder="Toyota Land Cruiser 300"
      />
      <Myfooter />
    </div>
  );
}

export default App;
