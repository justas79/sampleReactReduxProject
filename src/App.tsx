import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./state/store";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TransactionListContainer from "./componenents/TransactionListContainer";

function App() {
  return (

	  <Provider store={store}>
		  <BrowserRouter>
			  <Switch>
				  <Route exact path="/" component={TransactionListContainer} />
			  </Switch>
		  </BrowserRouter>


	  </Provider>

  );
}

export default App;
