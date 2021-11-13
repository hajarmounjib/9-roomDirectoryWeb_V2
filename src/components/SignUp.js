import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import '../SignUp.css'
import travel from '../images/travel-img.svg'
import avatar from '../images/avatar.svg'
import wave from '../images/wave.png'
const SignUp = () => {
    return (
<>

<img className="wave" src={wave}></img>
            <div className="container">
                <div className="img">
                    <img src={travel}/>
		        </div>
                    <div className="login-content">
                        <form action="index.html">
                        <img src={avatar} />
                            <h3 className="title">HAPPY TO SEE YOU AGAIN !!!</h3>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Name</h5>
                                    <input type="text" className="input"/>
           		            </div>
                        </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>Password</h5>
                                    <input type="password" className="input"/>
            	                </div>     
                            </div>
                                <Link to="/signIn">Créer un compte</Link>
                                <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
            </div>
            </>
            )
}

export default SignUp
