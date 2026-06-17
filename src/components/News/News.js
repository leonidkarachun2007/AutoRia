import './News.css';

export function News (){
  return (
    <div className='News'>
      <div id='container_news'>
        <div className='block_news'>
          <div className='texts_block_news1'>
          <h1>Новини автомобільного світу</h1>
          <p>Свіжі події, тренди та прем'єри зі світу автомобілів</p>
          </div>
          <div className='byd'>
            <img src='./image21.png' alt='byd'/>
            <h2>BYD продовжує лідирувати 
на ринку електромобілів у 2026 році</h2>
<p>12 червня 2026   |   Електромобілі</p>
          </div>
          
        </div>

        <div className='block_news2'>
          <h3>Найважливіші</h3>
          <div className='new_block_news2'>
            <img src='./image22.png'/>
            <div className='texts_block_news'>
            <h4>Tesla розширює тестування Robotaxi в Європі</h4>
            <div className='texts_block_news2'>
               <p>12 червня 2026</p>
               <p>Технології</p>
            </div>
            </div>
          </div>
          <div className='line_news'></div>


                    <div className='new_block_news2'>
            <img src='./image26.png'/>
            <div className='texts_block_news'>
            <h4 style={{width: '333px'}}>Нові мита США можуть коштувати автовиробникам понад $40 млрд</h4>
            <div className='texts_block_news2'>
               <p>11 червня 2026</p>
               <p>Бізнес</p>
            </div>
            </div>
          </div>
          <div className='line_news'></div>


                              <div className='new_block_news2'>
            <img src='./image27.png'/>
            <div className='texts_block_news'>
            <h4 style={{width: '333px'}}>Ford і Honda оголосили масштабні відкликання автомобілів</h4>
            <div className='texts_block_news2'>
               <p>11 червня 2026</p>
               <p>Новини</p>
            </div>
            </div>
          </div>
          <div className='line_news'></div>

                                        <div className='new_block_news2'>
            <img src='./image28.png'/>
            <div className='texts_block_news'>
            <h4 style={{width: '303px'}}>Stellantis тестує твердотільні акумулятори нового покоління</h4>
            <div className='texts_block_news2'>
               <p>10 червня 2026</p>
               <p>Технології</p>
            </div>
            </div>
          </div>
        </div>
      </div>


      <div id='container_news2'>
        <h2>Останні новини</h2>
        <div className='flex2_block_news3'>
        <div className='flex_block_news3'>
          <div className='block_news3' >
            <img src='./image30.png'/>
            <p>14 червня 2026</p>
            <h4>Представлено новий Toyota Land Cruiser FJ 2026</h4>
            <p style={{marginBlockStart: '35px', color: '#2F3C90'}}>Новиники</p>
          </div>


  
          <div className='block_news3'>
            <img src='./image31.png'/>
            <p>13 червня 2026   </p>
            <h4>Hyundai представила новий Ioniq 7 — конкурента Tesla Model X</h4>
            <p style={{marginBlockStart: '35px', color: '#2F3C90'}}>Електромобілі</p>
          </div>





          <div className='block_news3'>
            <img src='./image32.png'/>
            <p>13 червня 2026</p>
            <h4>Volkswagen запускає доступний електрокар ID.2 у 2026 році</h4>
            <p style={{marginBlockStart: '35px', color: '#2F3C90'}}>Новиники</p>
          </div>





          <div className='block_news3'>
            <img src='./image33.png'/>
            <p>12 червня 2026</p>
            <h4>Toyota, Honda та Nissan змінюють стратегію в боротьбі з BYD</h4>
            <p style={{marginBlockStart: '35px', color: '#2F3C90'}}>Бізнес</p>
          </div>
</div>



        <div className='flex_block_news3'>
          <div className='block_news3' >
            <img src='./image34.png'/>
            <p>12 червня 2026</p>
            <h4>Гібриди знову в тренді: світовий попит зростає</h4>
            <p style={{marginBlockStart: '61px', color: '#2F3C90'}}>Аналітика</p>
          </div>


  
          <div className='block_news3'>
            <img src='./image35.png'/>
            <p>12 червня 2026</p>
            <h4>Електромобілі вперше обійшли дизельні авто в Європі</h4>
            <p style={{marginBlockStart: '35px', color: '#2F3C90'}}>Аналітика</p>
          </div>





          <div className='block_news3'>
            <img src='./image36.png'/>
            <p>12 червня 2026</p>
            <h4>Програмно-керовані автомобілі — майбутнє вже сьогодні</h4>
            <p style={{marginBlockStart: '35px', color: '#2F3C90'}}>Технології</p>
          </div>





          <div className='block_news3'>
            <img src='./image37.png'/>
            <p>11 червня 2026 </p>
            <h4>ТОП-10 найочікуваніших автомобілів 2026 року</h4>
            <p style={{marginBlockStart: '61px', color: '#2F3C90'}}>Добірки</p>
          </div>
</div>
</div>
        
      </div>
    </div>
  );
}
export default News;
