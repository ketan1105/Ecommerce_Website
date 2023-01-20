import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import CategoriesList from './components/CategoriesList/CategoriesList.js';
import Carousel from './components/Carousel/Carousel.js';
import BankImage from './components/BankImage/BankImage';
import ProductCards from './components/ProductCards/ProductCards';

function App() {
  //1. navbar component
  //2. list of categories
  //3. carousel
  //4. top offers side by side noise product
  //5. cards component
  return (
   <div>
    <Navbar />
    <CategoriesList />
    <Carousel />
    <BankImage />
    <ProductCards />
    </div>
  );
};

export default App;
