import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './views/Home/Home';
function App() {
  return (
    <BrowserRouter>
   <MainLayout>
    <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
    </Switch>
    </MainLayout>
  </BrowserRouter>
  );
}

export default App;
