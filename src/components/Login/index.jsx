import React from 'react'
import style from './login.module.scss';
import Matteo from '../../assets/matteo.png';
import LogoFb from '../../assets/Facebook.png'
import LogoGoogle from '../../assets/Google.png'


export function Login() {
  return (
    <div className={style.container}>
        <div className='right-side'>
        <img className={style.container__matteo} src={Matteo} alt="" />
        </div>
        <div className={style.leftSide}>
        <h1 className={style.leftSide__texth1}>Login your account </h1>
        <div className={style.leftSide__mb}>
        <input  className={style.leftSide__form} type="email" placeholder='E-mail' />
        <input  className={style.leftSide__form} type="password" placeholder='Password' />
        <input type="checkbox" id='checbox' />
        <label for="checkbox">< a href="#"> Remember Me</a>
        </label>
        <span><a className={style.leftSide__ml} href="#">Forget Password?</a></span>

        
        </div>
        
        <a href="#"><button className={style.leftSide__button }>Login</button>
        </a> 
        
        <p className={style.leftSide__or }>Or</p>

        
        <a className={style.leftSide__buttonGoogle} href="#"> <img src={LogoGoogle} alt="" /> Login with Google</a><br /><br />
        <a className={style.leftSide__buttonFacebook} href="#"> <img src={LogoFb} alt="" /> Login with Facebook</a>

        <a href=""><p>Don't have an account? <b>Click Here</b></p>
        </a>
        </div>


    </div>
  )
}
