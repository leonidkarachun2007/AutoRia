import './SignUp.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function SignUp () {
   const [showPassword, setShowPassword] = useState(false);
return (
  <div className='SignUp'>

    <div id='container_sign_up'>


      <img className='hero-img' src='./image 13.png' alt='rrl2'/>


    <div id='container_form_log_in'>
      <div className='form1'>
      <h2>Ласкаво просимо</h2>
      <p>Увійдіть до свого облікового запису, щоб продовжити.</p>
    </div>

    <div className='form2'>
            <div className='input_sign_up'>
        <p>Повне ім'я</p>
        <input type='text' placeholder="Введіть повне ім'я"/>
      </div>
      <div className='input_sign_up'>
        <p>Електронна пошта</p>
        <input type='email' placeholder='Введіть електронну пошту'/>
      </div>
      <div className='input_sign_up'>
        <p>Пароль</p>
        <input type={showPassword ? 'password' : 'text'}
                placeholder='Створіть пароль'/>
      <img src={showPassword ? './сomponent 20.png' : './component 19.png'}
                alt='toggle password'
                onClick={() => setShowPassword(!showPassword)}/>
      
      </div>
      

        <div className='legal'>
                <input type='radio'/>
          <p>Погоджуюся з умовами та політикою</p>
        </div>


        <button>Зареєструватися</button>
 
    </div>

    <div className='form3'>
      <div className='or'>
        <div className='line'></div>
        <p>або зареєструватися через</p>
        <div className='line'></div>
      </div>

      <button><img src='./devicon_google.png' alt='Google'></img>Зареєструватися через Google</button>
      <button><img src='./uiw_apple.png' alt='Apple'></img>Зареєструватися через Apple</button>

      <div className='rout_login'>
        <p>Вже маєте акаунт?</p>
        <Link to='/login'>Увійти</Link>
      </div>
    </div>


    </div>
    </div>
  </div>

);
}


export default SignUp;
