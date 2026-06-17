import './Profile.css';
import { useState } from 'react';

export function Profile () {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='Profile'>
      <div id='container_profile'>
        <div id='container_profile2'>
          <img src='/Group 215.png' alt='profile'/>
          <div className='data'>
            <h2>Перекуп Леонід</h2>
            <p>leonid_legenda@gmail.com</p>
            <p>+380961234567</p>
            <button>Редагувати профіль</button>
          </div>
        </div>

        <div className='line'></div>

        <div id='container_profile3'>
          <div className='information_sale'>
            <h2>1</h2>
            <p>Активних оголошень</p>
          </div>
          <div className='information_sale'>
            <h2>5</h2>
            <p>Проданих авто</p>
          </div>
        </div>

        <div id='container_profile4'>
          <div className='announcement'>
            <h2>Мої оголошення</h2>
            <button>Додати оголошення</button>
          </div>

          {/* Always visible */}
          <div className='announcement_car'>
            <img src='/nikitalx.png' alt='lexus'/>
            <div className='announcement_car_text'>
              <h3>Lexus LX 500d</h3>
              <div className='announcement_car_text2'>
                <p>3,3 л</p><p>•</p><p>Дизель</p><p>•</p><p>Автомат</p>
              </div>
              <p>Київ</p>
            </div>
            <h3>115 000 $</h3>
            <div className='announcement_car_text3'><h3>1245</h3><p>переглядів</p></div>
            <div className='announcement_car_text3'><h3>45</h3><p>повідомлень</p></div>
            <div className='active'><div className='circle_active'></div><p>Активне</p></div>
          </div>

          <div className='announcement_car'>
            <img src='/yaiaudi.png' alt='toyota'/>
            <div className='announcement_car_text'>
              <h3>Toyota Land Cruiser 300</h3>
              <div className='announcement_car_text2'>
                <p>3.5 л</p><p>•</p><p>Бензин</p><p>•</p><p>Автомат</p>
              </div>
              <p>Дніпро</p>
            </div>
            <h3>92 000 $</h3>
            
            <div className='announcement_car_text3'><h3>2567</h3><p>переглядів</p></div>
            <div className='announcement_car_text3'><h3>87</h3><p>повідомлень</p></div>
            <div className='no_active'><div className='circle_no_active'></div><p>Продане</p></div>
          </div>

          <div className='announcement_car'>
            <img src='/rrl.png' alt='range rover'/>
            <div className='announcement_car_text'>
              <h3>Range Rover</h3>
              <div className='announcement_car_text2'>
                <p>3.0 л</p><p>•</p><p>Дизель</p><p>•</p><p>Автомат</p>
              </div>
              <p>Одеса</p>
            </div>
            <h3>165 000 $</h3>
            
            <div className='announcement_car_text3'><h3>2345</h3><p>переглядів</p></div>
            <div className='announcement_car_text3'><h3>23</h3><p>повідомлень</p></div>
            <div className='no_active'><div className='circle_no_active'></div><p>Продане</p></div>
          </div>

          {/* Hidden — shown after clicking */}
          {showMore && (
            <>
              <div className='announcement_car'>
                <img src='/vw1.png' alt='audi'/>
                <div className='announcement_car_text'>
                  <h3>Audi Q5</h3>
                  <div className='announcement_car_text2'>
                    <p>2.0 л</p><p>•</p><p>Дизель</p><p>•</p><p>Автомат</p>
                  </div>
                  <p>Одеса</p>
                </div>
                <h3>23 500 $</h3>
                <div className='announcement_car_text3'><h3>5432</h3><p>переглядів</p></div>
                <div className='announcement_car_text3'><h3>98</h3><p>повідомлень</p></div>
                <div className='active'><div className='circle_active'></div><p>Активне</p></div>
              </div>

              <div className='announcement_car'>
                <img src='/bmwx5M.png' alt='bmw'/>
                <div className='announcement_car_text'>
                  <h3>BMW X5 M</h3>
                  <div className='announcement_car_text2'>
                    <p>4.4 л л</p><p>•</p><p>Бензин</p><p>•</p><p>Автомат</p>
                  </div>
                  <p>Одеса</p>
                </div>
                <h3>98 000 $</h3>
                <div className='announcement_car_text3'><h3>1256</h3><p>переглядів</p></div>
                <div className='announcement_car_text3'><h3>34</h3><p>повідомлень</p></div>
                <div className='no_active'><div className='circle_no_active'></div><p>Продане</p></div>
              </div>

              <div className='announcement_car'>
                <img src='/mercedescla.png' alt='mercedes'/>
                <div className='announcement_car_text'>
                  <h3>Mercedes S-Class Coupe</h3>
                  <div className='announcement_car_text2'>
                    <p>4.7 л</p><p>•</p><p>Бензин</p><p>•</p><p>Автомат</p>
                  </div>
                  <p>Одеса</p>
                </div>
                <h3>75 000 $</h3>
                <div className='announcement_car_text3'><h3>3464</h3><p>переглядів</p></div>
                <div className='announcement_car_text3'><h3>96</h3><p>повідомлень</p></div>
                <div className='no_active'><div className='circle_no_active'></div><p>Продане</p></div>
              </div>
            </>
          )}

          <p className='view' onClick={() => setShowMore(!showMore)} style={{ cursor: 'pointer' }}>
            {showMore ? 'Приховати оголошення' : 'Показати ще 3 оголошення'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
