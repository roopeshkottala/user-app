// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';

import { getInfo } from './getInfo';
import { IUser } from '@user-app/shared';

function Home() {
  getInfo().then((val) => {
    console.info('i got the resp from api', val);
  });
  const d: IUser = { firstName: 'test', lastName: 't', email: 'aa' };

  return <h1>Test home page {d.firstName}</h1>;
}

function ProductList() {
  return <h1>ProductList</h1>;
}

function OrderList() {
  return <h1>OrderList</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
    </Routes>
  );
}

export default App;
