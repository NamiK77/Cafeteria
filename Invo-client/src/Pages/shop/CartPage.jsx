import React, { useContext, useState } from 'react';
import useCart from '../../hooks/useCart';
import { FaTrash } from "react-icons/fa"
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';


const CartPage = () => {
  const [cart,refetch] = useCart();
  const {user} = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([])

   // Calculate the total price for each item in the cart
   const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //handleDecrease function
  const handleDecrease = (item) => {
    if(item.quantity >1){
      fetch(`http://localhost:6001/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 })
      })
      .then(res => res.json())
      .then(data => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem._id === item._id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        });
    
        refetch(); // Assuming refetch is a function to refresh data
        setCartItems(updatedCart);
      })
      refetch();
    }
    else{
      alert("Item cant be Zero")
    }


  }

  //handleIncrease
  const handleIncrease = (item) => {
    fetch(`http://localhost:6001/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 })
    })
    .then(res => res.json())
    .then(data => {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
  
      refetch(); // Assuming refetch is a function to refresh data
      setCartItems(updatedCart);
    })
    refetch();


  }

  // Calculate the cart subtotal
  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Calculate the order total
  const orderTotal = cartSubtotal;


  //handleDelete section
  const handleDelete =(item) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:6001/carts/${item._id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            }

          }) 

      }
    });
  }


  
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            {/* banner */}
        <div className={`bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%`}>
        <div className="py-28 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to The<span className="text-green"> Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* cart table */}
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    <tr>
                  <th>#</th>
                  <th>Food</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item, index) => (
          <tr key={index}>
          <td>{index + 1}</td>
        
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={item.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
             
            </div>
          </td>
          <td  className='font-medium'>
           {item.name}
          </td>
          <td>
            <button className='btn btn-xs'onClick={() => handleDecrease(item)}>-</button>
           <input type="number" value={item.quantity} 
           onChange={() => console.log(item.quantity)}
           
           className='w-10 mx-2 text-center overflow-hidden'/> 
           <button className='btn btn-xs' onClick={() => handleIncrease(item)}>+</button>


          </td>
          <td>{calculateTotalPrice(item).toFixed(2)}</td>
          <th>
            <button className="btn btn-ghost text-red btn-xs" onClick={() => handleDelete(item)}>
              <FaTrash/>
              </button>
          </th>
        </tr>
        ))
      }


    </tbody>

  </table>
</div>
      </div>


      {/* customer details */}
      <div className="flex flex-col md:flex-row justify-between items-start my-12 gap-8">
      <div className='md:w-1/2 space-y-3'>
      <h3 className='font-medium'>Customer Details</h3>
      <p>Name: {user?.displayName || "None"}</p>
            <p>Email: {user?.email}</p>
            <p>
              User_id: <span className="text-sm">{user?.uid}</span>
            </p>

      </div>
      <div className='md:w-1/2 space-y-3'>
      <h3 className="text-lg font-semibold">Shopping Details</h3>
            <p>Total Items: {cart.length}</p>
            <p>
              Total Price:{" "}
              <span id="total-price">${orderTotal.toFixed(2)}</span>
            </p>
            <button to="/process-checkout" className="btn btn-md bg-green text-white px-8 py-1">
              Procceed to Checkout
            </button>
      </div>

      </div>

    </div>
  )
}

export default CartPage
