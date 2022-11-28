import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css'
import HeaderTop from './components/Header/HeaderTop/headerTop.js';
import HeaderBot from './components/Header/HeaderBot/headerBot.js';
import MainSearchResult from './components/MainBody/MainSearchResult/mainSearchResult.js'
import MainMenu from './components/MainBody/MainMenu/mainMenu';
import ProductFilter from './components/MainBody/ProductFilter/productFilter';
import ProductList from './components/MainBody/ProductList/product-list';
import Footer from './components/Footter/Footer';
import Contact from './components/Footter/Contact';
import { initFilterFields } from './utils/constants';
import { filterByAttributeKey, updateFilterField } from './utils/helpers';

const MainProduct = (props) => {
  const { products, setProducts } = props;

  const [productsSnapshot, setProductsSnapshot] = useState([]);
  const [filterFields, setFilterFields] = useState(initFilterFields);
  console.log(productsSnapshot)
  // Khi render UI lan dau tien: useEffect se chay 1 lan : productsSnapshot se duoc dai gia tri tu 
  useEffect(() => {
    setProductsSnapshot([...products]);
    console.log([...products]);
    console.log(productsSnapshot)
  }, [products]);

  const handleFilterProducts = (e, item, attributeKey) => {
    const { checked } = e.target;

    const filters = updateFilterField(filterFields, attributeKey, setFilterFields, item, checked);
    const filteredProducts = filterByAttributeKey(attributeKey, products, filters, setProducts);
    setProductsSnapshot(filteredProducts);
  }

  return (
    <div className='main'>
      <MainSearchResult />
      <div id='body'>
        <div id='menu-option'>
          <MainMenu handleFilterProducts={handleFilterProducts} />
        </div>
        <div id='main-result'>
          <div id='product-filter'>
            <ProductFilter />
          </div>
          <div id='list-result'>
            <ProductList products={productsSnapshot} />
          </div>
        </div>
      </div>
    </div>
  )
}

const endPoint = 'http://localhost:8000/products'

function App() {

  const [products, setProducts] = useState([])
  console.log(products)
  useEffect(() => {
    fetch(endPoint)
      .then(res => res.json())
      .then(products => {
        setProducts(products);
        console.log(products)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderTop />
        <HeaderBot />
      </header>
      <MainProduct products={products} setProducts={setProducts} />
      <div className='footer'>
        <Footer />
      </div>
      <Contact />
    </div>
  );
}

export default App;
