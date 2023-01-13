import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import FlowerBlock from './components/FlowerBlock';
import products from '../src/assets/products.json';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все товары</h2>
          <div className="content__items">
            {products.map((obj, index) => (
              <FlowerBlock key={index} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
