import './App.css';
import MainPage from './components/MainPage/MainPage';
import Myfooter from './components/Myfooter/Myfooter';
import Myheader from './components/Myheader/Myheader';
import OffersPage from './components/OffersPage/OffersPage';

function App() {
  return (
    <div className="App">
      <Myheader />
      <OffersPage />
      <Myfooter />
    </div>
  );
}

export default App;
