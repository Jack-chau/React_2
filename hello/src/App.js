import Employees from './pages/Employees';
import Header from './components/Header' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/404' ;

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path = '/employees' element = { < Employees /> } />
          <Route path = '/customers' element = { < Customers /> } />
          <Route path = '/dictionary' element = { < Dictionary /> } />
          <Route path = '/dictionary/:search' element = { < Definition /> } />
          <Route path = '/404' element = { < NotFound /> } />
          <Route path = '/*' element = { < NotFound /> } /> // if it doesn't hit anything, go to 404
          <Route path = './test' element = { <test/> } />
        </Routes>
      </Header>
    </BrowserRouter>
  ) ;
}

export default App;
