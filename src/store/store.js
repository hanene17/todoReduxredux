import {createStore} from 'redux'
//import rootReducer from '../Reducer/'
import reducer from '../Reducer/Reducer'
 const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    export default store;
