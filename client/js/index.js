import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

//import react router deps
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store'
import App from './components/app';


// const router = (
//     <Provider store={store}>

//     </Provider>
// );
//
// render(router, document.getElementById('root'));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
// console.log('store: ', store.getState());

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                {/* <Route path="/view/:postId" component={Single}></Route> */}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
  )
})
