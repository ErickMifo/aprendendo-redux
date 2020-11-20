import { createStore } from 'redux';

const INITAL_STATE = {
    data: [
        
    ],
    quantidade: 0
}


function Reducer(state = INITAL_STATE, action) {
    switch(action.type) {
        case 'ADD_PRODUTO': 
             return {...state, data: [...state.data, action.addProduto] }

        case 'ADD_QUANTIDADE':
            return {...state, quantidade:  action.add};
        
            default:
                return state;
            
    }
}


const store = createStore(Reducer);

export default store