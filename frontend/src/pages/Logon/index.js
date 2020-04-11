import React from 'react';
import  './style.css';
import logo from '../../assets/logo.svg';
import hero from '../../assets/heroes.png';
import { FiLogIn} from 'react-icons/fi';

export default function index(){

    return(
        <div className="logon-container">
            <secttion className="form">
                <img src={logo} alt="Be the Hero" />
                
                
                <form action="#">
                    <h1>Faça seu Login</h1>
                  
                    <input type="text" placeholder="Sua Id"/>
                    <input className="button" type="submit" value="Entrar" />
                  
                    <a href="/register">
                    <FiLogIn  size={16} color="#E02041" />
                    Não tenho Cadastro
                    </a>
                </form>
                
            </secttion>
            
            <img src={hero}  alt="Heroes"/>
            
        </div>

    );

}