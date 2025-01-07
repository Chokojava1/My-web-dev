import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Slider from './assets/slider.jpg';
import Console from './assets/consoles.jpg';
import Disc from './assets/discgames.png';
import Nba from './assets/nba.jpg';
import Peri from './assets/peripherals.jpg';
import Voucher from './assets/voucher.png';
import { FiTruck } from 'react-icons/fi';
import { LuPhilippinePeso } from 'react-icons/lu';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Homeproduct from './homeproduct';
import './Home.css';

const Home = ({detail, view, close, setClose, addtocart}) => {
  const [homepProduct] = useState(Homeproduct);

  return (
    <>

                {close ?
                    <div className="product_detail">
                        <div className="container">
                            <button onClick={() => setClose(false)} className="close-btn">
                                <AiOutlineCloseCircle />
                            </button>
                            {detail.map((curElm) => {
                                return (
                                    <div className="productbox" key={curElm.id}>
                                        <div className="img-box">
                                            <img src={curElm.Img} alt={curElm.Title} />
                                        </div>
                                        <div className="detail">
                                            <h4>{curElm.Cat}</h4>
                                            <h2>{curElm.Title}</h2>
                                            <p>Description of the product goes here...</p>
                                            <h3>{curElm.Price}</h3>
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div> : null
                }
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Game in 2025</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={Slider} alt="sliderimg" />
          </div>
        </div>
      </div>

      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src={Console} alt="console" />
            </div>
            <div className="detail">
              <p>5 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={Voucher} alt="Vouchers" />
            </div>
            <div className="detail">
              <p>2 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={Peri} alt="Peripherals" />
            </div>
            <div className="detail">
              <p>3 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={Disc} alt="Disc" />
            </div>
            <div className="detail">
              <p>5 Products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above ₱200.00</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <LuPhilippinePeso />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guaranteed</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineReceiptPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {
          homepProduct.map((curElm) =>
            { return (
            <div className="box" key={curElm.id}>
              <div className="img_box">
                <img src={curElm.Img} alt={curElm.Title}></img>
                <div className="icon">
                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart/></li>
                    <li onClick={() => view(curElm)}><BsEye/></li>
                    <li><AiOutlineHeart /></li>
                </div>
              </div>
              <div className="detail">
                <p>{curElm.Cat}</p>
                <h3>{curElm.Title}</h3>
                <h4>₱{curElm.Price}</h4>
              </div>
            </div>
          )
          })
          }
        </div>
      </div>
      <div className="banner">
        <div className="container">
        <div className="detail">
          <h4>Latest Games Added</h4>
          <h3>Nba 2k25</h3>
          <p>₱ 3,590.00</p>
          <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
        </div>
        <div className="img_box">
          <img src= {Nba} alt='sliderimg'></img>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
