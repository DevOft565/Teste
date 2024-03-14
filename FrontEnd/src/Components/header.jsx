import React from "react";
import "./header.css"

function header() {
    return(
        <header>
            <div id="conteudo">
                <h2>DevOft</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            
            <hr />
        </header>
    );
};

export default header;