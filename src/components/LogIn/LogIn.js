import './LogIn.css';
import { useState } from 'react';


export function LogIn () {
   const [showPassword, setShowPassword] = useState(false);
return (
  <div className='LogIn'>

    <div id='container_log_in'>


      <img className='hero-img' src='./rrl.png' alt='rrl'/>


    <div id='container_form_log_in'>
      <div className='form1'>
      <h2>Ласкаво просимо</h2>
      <p>Увійдіть до свого облікового запису, щоб продовжити.</p>
    </div>

    <div className='form2'>
      <div className='input_log_in'>
        <p>Електронна пошта</p>
        <input type='email' placeholder='Введіть електронну пошту'/>
      </div>
      <div className='input_log_in'>
        <p>Пароль</p>
        <input type={showPassword ? 'password' : 'text'}
                placeholder='Створіть пароль'/>
      <img src={showPassword ? './сomponent 20.png' : './component 19.png'}
                alt='toggle password'
                onClick={() => setShowPassword(!showPassword)}/>
      
      </div>
      
      <div className='func'>
        <div className='remember'>
                <input type='radio'/>
          <p>Запам'ятати мене</p>
        </div>
        <p>Забули пароль?</p>
      </div>


        <button>Увійти</button>
 
    </div>

    <div className='form3'>
      <div className='or'>
        <div className='line'></div>
        <p>або продовжити через</p>
        <div className='line'></div>
      </div>

      <button><img src='./devicon_google.png'></img>Увійти через Google</button>
      <button><img src='./uiw_apple.png'></img>Увійти через Apple</button>

      <div className='rout_signup'>
        <p>Ще не маєте акаунта?</p>
        <p>Зареєструватися</p>
      </div>
    </div>


    </div>
    </div>
  </div>

);
}


export default LogIn;
