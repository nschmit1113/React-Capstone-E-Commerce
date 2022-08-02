import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/authentication/authentication.component';

const Shop = () => {
  return(
    <div>
      Shopping
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='shop' element={<Shop />} />
       <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
