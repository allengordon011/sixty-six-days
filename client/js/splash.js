import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

//import react router deps
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Splash from './components/splash';

// const router = (
//     <Provider store={store}>

//     </Provider>
// );
//
// render(router, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    // <Provider store={store}>
    //     <Router>
    //         <Route path="/" component={App}>
    //             {/* <Route path="/view/:postId" component={Single}></Route> */}
    //         </Route>
    //     </Router>
    // </Provider>,
    <Splash />,
    document.getElementById('splash')
  )
})
