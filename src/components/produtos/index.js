import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css'

function Produtos() {

    const products = [
        'Produto 1',
        'Produto 2',
        'Produto 3',
        'Produto 4'
    ]

    var quantidade = useSelector(state => state.quantidade)
    const dispatch = useDispatch();

    function addQuantidade(){
        dispatch({ type: 'ADD_QUANTIDADE', add: quantidade = quantidade + 1})
    }

    function subQuantidade(){
        dispatch({ type: 'SUB_QUANTIDADE', sub: quantidade = quantidade - 1})
    }


    return  (
        <div className="productContainer">
    <ul>
       {products.map(product =>
         <div  key={product}  className='produtos' >
             <li className='produto'>{product}</li> 
             <button onClick = { addQuantidade } className="buttonProduct">Adicionar</button> 
             <p> {quantidade} </p>
             <button disabled={quantidade > 0 ? false : true} onClick = { subQuantidade } className="buttonProduct">Remover</button>
        </div>
    )}
       
    </ul>

    </div>

 
    )

    
}

export default Produtos