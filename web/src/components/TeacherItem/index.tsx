import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
        <img src="https://avatars3.githubusercontent.com/u/54561217?s=460&u=490dfdac8f680eff1f41bbd18810240a1d0972d0&v=4" alt=""/>
        <div>
            <strong>Ana Lúcia Lopes de Morais</strong>
            <span>Quimica</span>
        </div>
    </header>

    <p>
    Entusiasta das melhores tecnologias de química avançada.
    <br></br>
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
    </footer>
</article>
 

  )
}

export default TeacherItem;