import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'
//permite levar atributos para dentro de um component
interface PageHeaderProps{
    title: string;
}
// TYPESCRIPT
/*dentro da minha pageHeader nas funções de components tem 
algumas propriedades que são guardadas em <PageHeaderProps> 
vai receber os parametros*/
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>
                
                <div className="header-content">
                    <strong>{props.title}</strong>

                    {/* buscando o conteudo escrito dentro do component */}
                    {props.children}
                </div>
                
            </header>
    );
}

export default  PageHeader;

