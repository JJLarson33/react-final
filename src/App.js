import { BrowserRouter } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import MainBox from './components/MainBox';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveDrawer />
         <MainBox />         
      </BrowserRouter>
    </div>
  );
}

export default App;
