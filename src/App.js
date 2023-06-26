import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className='md:container md:mx-auto md:px-20'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
