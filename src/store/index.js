import { createStore } from 'redux';

const INITAL_STATE= {
    quantidade: 0
}


function QuantidadeReducer(state = INITAL_STATE, action) {
    switch(action.type) {
        case 'ADD_QUANTIDADE':
            return { quantidade:  action.add};
        
        case 'SUB_QUANTIDADE':
            return { quantidade: action.sub }
        
            default:
                return state;
            
    }
}


const storeQuantidade = createStore(QuantidadeReducer);

export default storeQuantidade