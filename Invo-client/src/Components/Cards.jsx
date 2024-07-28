import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FaHeart} from "react-icons/fa"
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2'

const Cards = ({item}) => {
  const {name, image,price,recipe,_id} = item;

    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const {user} = useContext(AuthContext);
    //console.log(user)


    const navigate = useNavigate();
    const location = useLocation();

    //add to cart btn
    const handleAddtoCart = (item) => {
      // console.log("btn is clicked", item);
      if(user && user?.email){
        const cartItem = {menuItemID :_id, name, quantity:1, image,price,email:user.email };
        // console.log(cartItem)
        fetch('http://localhost:6001/carts',{
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(cartItem)

        }).then(res => res.json()).then(data =>{
          // console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Items Added To Cart",
              showConfirmButton: false,
              timer: 1500
            });
          }
        });


      }
      else{

        Swal.fire({
          title: "Please Login",
          text: "Without login You cant access it !!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/signup',{state:{from: location}})
          }
        });

      }

    };


    const handleHeartClick = () => {
      setIsHeartFilled(!isHeartFilled);
    };
    
  return (
   
      <div className="card bg-base-100 w-96 shadow-xl">
         <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
  <Link to = {'/menu/${item._id}'}>
  <figure>
    <img
      src={item.image}
      alt="" 
      className='hover:scale-105 transition-all duration-200 md:h-72'
      />
  </figure>
  </Link>
  <div className="card-body">
    <Link to = {'/menu/${item._id}'}><h2 className="card-title">{item.name}</h2></Link>
    
    <p>Description of items</p>
    <div className="card-actions justify-between items-center mt-2">
        <h5 className='font-semibold'><span className='text-sm text-red'>$</span>{item.price}</h5>
      <button className="btn bg-green text-white" onClick={() => handleAddtoCart(item)}>Add to cart</button>
    </div>
  </div>
    </div>
   
  );
};

export default Cards;
