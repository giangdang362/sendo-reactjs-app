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
import EmptyPage from './components/EmptyPage';

const MainProduct = (props) => {
  const { products, setProducts, searchInput } = props;

  const [productsSnapshot, setProductsSnapshot] = useState([]);

  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    applyFiltersSearch(searchInput);

  }, [searchInput])

  const applyFiltersSearch = (searchInput) => {
    if (searchInput) {
      let updateSearch;

      updateSearch = productSearch.filter((item) => item.name.toLowerCase().trim().indexOf(searchInput.toLowerCase().trim()) !== -1);
      console.log('searchInput', productsSnapshot);
      setProductsSnapshot(updateSearch);
    }
    if (searchInput.length === 0) {
      setProductsSnapshot([...productSearch]);
    }
  }
  
  const [filterFields, setFilterFields] = useState(initFilterFields);

  useEffect(() => {
    setProductsSnapshot([...products]);
    setProductSearch([...products]);
  }, [products]);

  const handleFilterProducts = (e, item, attributeKey) => {
    const { checked } = e.target;

    const filters = updateFilterField(filterFields, attributeKey, setFilterFields, item, checked);
    const filteredProducts = filterByAttributeKey(attributeKey, products, filters, setProducts);
    setProductsSnapshot(filteredProducts);
    setProductSearch(filteredProducts);
    if (filteredProducts.length === 0) {
      setProductsSnapshot([...products]);
    }
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
            <ProductFilter products={products} setProductsSnapshot={setProductsSnapshot}/>
          </div>
          <div id='list-result'>
            {productsSnapshot.length !== 0 ? <ProductList products={productsSnapshot}/> : <EmptyPage />  }
          </div>
        </div>
      </div>
    </div>
  )
}

const endPoint = 'http://localhost:8000/products'

function App() {
  
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(endPoint)
      .then(res => res.json())
      .then(products => {
        setProducts(products);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderTop />
        <HeaderBot
          setSearchInput={setSearchInput}
        />

      </header>
      <MainProduct
        searchInput={searchInput}
        products={products}
        setProducts={setProducts}
      />
      <div className='footer'>
        <Footer />
      </div>
      <Contact />
    </div>
  );
}

export default App;
