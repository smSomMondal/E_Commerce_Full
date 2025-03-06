import { useEffect, useState } from "react";
import "./Collection.css";
import axios from 'axios';
import image1 from "../assets/image.png";
import image2 from "../assets/image copy.png";
import image3 from "../assets/image copy 2.png";
import image4 from "../assets/image copy 4.png";
import image5 from "../assets/image copy 3.png";
import image6 from "../assets/image copy 5.png";
import image7 from "../assets/image copy 6.png";
import image8 from "../assets/image copy 7.png";
import Navbar from "./Navbar";

const productsData = [
  { id: 1, name: "Kid Tapered Slim Fit Trouser", price: 38, category: "kids", type: "bottomwear", img: image1 },
  { id: 2, name: "Men Round Neck Pure Cotton T-shirt", price: 64, category: "men", type: "topwear", img: image2 },
  { id: 3, name: "Boy Round Neck Pure Cotton T-shirt", price: 60, category: "kids", type: "topwear", img: image3 },
  { id: 4, name: "Women Zip-Front Relaxed Fit Jacket", price: 74, category: "women", type: "winterwear", img: image4 },
  { id: 5, name: "Men Slim Fit Joggers", price: 45, category: "men", type: "bottomwear", img: image5 },
  { id: 6, name: "Girl Cotton T-shirt", price: 35, category: "kids", type: "topwear", img: image6 },
  { id: 7, name: "Women Puffer Jacket", price: 80, category: "women", type: "winterwear", img: image7 },
  { id: 8, name: "Women Linen Trousers", price: 55, category: "women", type: "bottomwear", img: image8 },
];

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");
  const [ProductList, setProduct] = useState([]); // Cart state

  useEffect(()=>{
    axios.post('http://127.0.0.1:4040/product/listU', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      setProduct(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])  

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, { ...product, image: product.img }]; 
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };
  
  
  const filteredProducts = productsData.filter(product =>
    (!selectedCategories.length || selectedCategories.includes(product.category)) &&
    (!selectedTypes.length || selectedTypes.includes(product.type))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price;
    if (sortBy === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <>
    <Navbar/>
    <section className="shop-container">
      <aside className="filters">
        <h3>FILTERS</h3>
        <div className="filter-section">
          <h4>Categories</h4>
          {['men', 'women', 'kids'].map(category => (
            <label key={category}>
              <input type="checkbox" onChange={() => handleCategoryChange(category)} /> {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
        <div className="filter-section">
          <h4>Type</h4>
          {['topwear', 'bottomwear', 'winterwear'].map(type => (
            <label key={type}>
              <input type="checkbox" onChange={() => handleTypeChange(type)} /> {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </aside>
      <div className="products-section">
        <h2>All <span>Collections</span></h2>
        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" onChange={handleSortChange}>
            <option value="relevant">Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        <div className="cart-info">
          {/* <h3>Cart: {cart.length} items</h3> */}
        </div>
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <strong>${product.price}</strong>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
          {ProductList.map((items,index) => (
            <div className="product" key={index}>
              <img src={items.img} alt={items.name} />
              <p>{items.desciption}</p>
              <strong>${items.price}</strong>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>\

    </>
  );
};

export default Shop;
