import React from 'react';
import './App.css';




function App() {
  const products = [
    {
      id: 101,
      title: "Boys Smart Velcro Shoes",
      description: "Men's shoes for games, sneakers for men",
      price: 900,
      img: "/img (1).webp",
      rating:9.0,
    },
    {
      id: 102,
      title: "Boys lase-up shoes",
      description: "Men's shoes for games, sneakers for men",
      price: 730,
      img: "/img (2).webp",
      rating:9.5,
    },
    {
      id: 103,
      title: "Man Sneakers",
      description: "Men's shoes for games, sneakers for men",
      price: 570,
      img: "/img (3).webp",
      rating:8.4,
    },
    {
      id: 104,
      title: "boys shoes for game",
      description: "Men's shoes for games, sneakers for men",
      price: 800,
      img: "/img (4).webp",
      rating:4.3,
    },

  ];
  // Sort the products by rating in descending order
  const topRatedProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="container mt-4"  style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card text-center mt-2">
              <div className='img-container'>
                <img src={product.img} className="card-img-top" alt={product.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className='price'>
                  <p className="card-text"><strong>Rs.{product.price}</strong></p>
                  <a href="#" className="btn btn-primary">Add to Cart <i className="fa fa-cart-plus" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>




{/* **************************top rated************************************* */}
<div className="row">
<h1 className="mt-5">Top Rated Products</h1>
  <div className="divider"></div>
</div>

<div className="row mt-6">
  {topRatedProducts.map((product) => (
    <div key={product.id} className="col-lg-6 col-md-4 col-sm-6 col-12 mt-4">
      <div className="card top-rated">
        <div className="row no-gutters">
         
          <div className="col-md-6">
            <div className='img-container'>
              <img src={product.img} className="card-img" alt={product.title} />
            </div>
          </div>
         
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p>Rating: {product.rating}</p>
              <div className='price'>
              <p className="card-text"><strong>Rs.{product.price}</strong></p>
              <a href="#" className="btn btn-primary"> <i class="fa fa-plus" aria-hidden="true"></i> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


{/* *************************************************************** */}

    </div>
  );
}

export default App;
