import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";


const product={
  name:"Blue",
  images:[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk27CaUvzg2IcTUQMKB-unU-Y4NeAn3Fx2rQ&usqp=CAU"}],
  price:"3000",
  _id:"vedang",
};
const Home=()=>{
  const dispatch = useDispatch();
  const {loading,error,products,productsCount}=useSelector(state=>state.products);

  useEffect(()=>{
     dispatch(getProduct());

    
  },[dispatch]);

    return (
    <Fragment>
      <MetaData title="Home Page" />
            <div className="banner">
            <p>Welcome to JALARAM CREATION</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products && products.map(product => (
              <Product product={product} />
            ))}  
 
          </div>
          </Fragment>
          );
};
export default Home;