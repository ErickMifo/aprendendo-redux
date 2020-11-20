import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';


function NavBar() {

    let produtos = useSelector(state => state.data)
    let quantidade = useSelector(state => state.quantidade)
    
    const [click, setClick] = useState(false)

    const handleClick = () => {
setClick(!click)

    }


    return(
        
<>

        <div className="navBar">
            
            <div className="title">Título</div> 
       
            <button
            className = "cart" 
            onClick={handleClick}> Carrinho: {quantidade} </button>

    
        </div>


        <div className = {click ? 'cartActive' : 'cartInactive'}>
            <h1>Lista de produtos</h1>
            <ul className="lista">
                {produtos.map(produto =>
             <li className="itemLista">{produto}</li> 
                )}
       
    </ul>
        </div>


</>
    )
}

export default NavBar