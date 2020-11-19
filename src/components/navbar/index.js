import React, { useState } from 'react';
import './styles.css';


function NavBar() {
    
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
            onClick={handleClick}> Cart </button>

    
        </div>


        <div className = {click ? 'cartActive' : 'cartInactive'}>
            <h1>Lista de produtos</h1>
        </div>


</>
    )
}

export default NavBar