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

    let quantidade = useSelector(state => state.quantidade)
    const dispatch = useDispatch();

    function addQuantidade(e){
        dispatch({ type: 'ADD_QUANTIDADE', add: quantidade = quantidade + 1 })
        dispatch({ type: 'ADD_PRODUTO', addProduto: e.target.id })
        console.log(e.target.id)
    }




    return  (
        <div className="productContainer">
    <ul>
       {products.map(product =>
         <div  key={product}  className='produtos' >
             <li className='produto'>{product}</li> 
             <button id={product} onClick = { addQuantidade } className="buttonProduct">Adicionar</button> 
        </div>
    )}
       
    </ul>


    </div>

 
    )

    
}

export default Produtos