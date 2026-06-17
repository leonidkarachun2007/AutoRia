import './News.css';

export function News() {
  return (
    <div className='News'>
      <div id='container_news'>
        <div className='block_news'>
          <div className='texts_block_news1'>
            <h1>Новини автомобільного світу</h1>
            <p>Свіжі події, тренди та прем'єри зі світу автомобілів</p>
          </div>
          <div className='byd'>
            <img src='./image21.png' alt='BYD електромобіль' />
            <h2>BYD продовжує лідирувати на ринку електромобілів у 2026 році</h2>
            <p>12 червня 2026 | Електромобілі</p>
          </div>
        </div>

        <div className='block_news2'>
          <h3>Найважливіші</h3>

          <div className='new_block_news2'>
            <img src='./image22.png' alt='Tesla Robotaxi' />
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
            <img src='./image26.png' alt='Мита США для автовиробників' />
            <div className='texts_block_news'>
              <h4 className='h4-wide'>Нові мита США можуть коштувати автовиробникам понад $40 млрд</h4>
              <div className='texts_block_news2'>
                <p>11 червня 2026</p>
                <p>Бізнес</p>
              </div>
            </div>
          </div>
          <div className='line_news'></div>

          <div className='new_block_news2'>
            <img src='./image27.png' alt='Ford і Honda відкликання' />
            <div className='texts_block_news'>
              <h4 className='h4-wide'>Ford і Honda оголосили масштабні відкликання автомобілів</h4>
              <div className='texts_block_news2'>
                <p>11 червня 2026</p>
                <p>Новини</p>
              </div>
            </div>
          </div>
          <div className='line_news'></div>

          <div className='new_block_news2'>
            <img src='./image28.png' alt='Stellantis акумулятори' />
            <div className='texts_block_news'>
              <h4 className='h4-medium'>Stellantis тестує твердотільні акумулятори нового покоління</h4>
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
            <div className='block_news3'>
              <img src='./image30.png' alt='Toyota Land Cruiser FJ 2026' />
              <p>14 червня 2026</p>
              <h4>Представлено новий Toyota Land Cruiser FJ 2026</h4>
              <p className='news_category'>Новини</p>
            </div>
            <div className='block_news3'>
              <img src='./image31.png' alt='Hyundai Ioniq 7' />
              <p>13 червня 2026</p>
              <h4>Hyundai представила новий Ioniq 7 — конкурента Tesla Model X</h4>
              <p className='news_category'>Електромобілі</p>
            </div>
            <div className='block_news3'>
              <img src='./image32.png' alt='Volkswagen ID.2' />
              <p>13 червня 2026</p>
              <h4>Volkswagen запускає доступний електрокар ID.2 у 2026 році</h4>
              <p className='news_category'>Новини</p>
            </div>
            <div className='block_news3'>
              <img src='./image33.png' alt='Toyota Honda Nissan vs BYD' />
              <p>12 червня 2026</p>
              <h4>Toyota, Honda та Nissan змінюють стратегію в боротьбі з BYD</h4>
              <p className='news_category'>Бізнес</p>
            </div>
          </div>

          <div className='flex_block_news3'>
            <div className='block_news3'>
              <img src='./image34.png' alt='Гібриди тренд' />
              <p>12 червня 2026</p>
              <h4>Гібриди знову в тренді: світовий попит зростає</h4>
              <p className='news_category news_category--tall'>Аналітика</p>
            </div>
            <div className='block_news3'>
              <img src='./image35.png' alt='Електромобілі обійшли дизельні авто' />
              <p>12 червня 2026</p>
              <h4>Електромобілі вперше обійшли дизельні авто в Європі</h4>
              <p className='news_category'>Аналітика</p>
            </div>
            <div className='block_news3'>
              <img src='./image36.png' alt='Програмно-керовані автомобілі' />
              <p>12 червня 2026</p>
              <h4>Програмно-керовані автомобілі — майбутнє вже сьогодні</h4>
              <p className='news_category'>Технології</p>
            </div>
            <div className='block_news3'>
              <img src='./image37.png' alt='ТОП-10 автомобілів 2026' />
              <p>11 червня 2026</p>
              <h4>ТОП-10 найочікуваніших автомобілів 2026 року</h4>
              <p className='news_category news_category--tall'>Добірки</p>
            </div>
          </div>
        </div>
      </div>

      <div id='container_news3'>
        <div className='block_news4'>
          <img src='./aurora-upscaler-precise_-0 1.png' alt='Mazda CX-5 тест-драйв' />
          <div className='block_news4__overlay'>
            <h2>Тест-драйв нової Mazda CX-5</h2>
            <p>Перевірка оновленого кросовера у реальних умовах та детальний огляд</p>
            <button>Дивитися огляд</button>
          </div>
        </div>

        <div className='block_news5'>
          <h2>Підпишіться на розсилку</h2>
          <p>Будьте в курсі останніх новин та важливих подій зі світу авто</p>
          <div className='input_row'>
            <input type='email' placeholder='Введіть e-mail' />
            <button>Підписатись</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;