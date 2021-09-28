import { Route, Switch } from 'react-router-dom';

import AllProducts from './product-list/AllProducts';
function App() {
  return (
    <AllProducts>
      <Switch>
        <Route path='/' exact>
          <AllProducts />
        </Route>
        <Route path='/details'>
        </Route>
      </Switch>
      </AllProducts>
  );
}

export default App;