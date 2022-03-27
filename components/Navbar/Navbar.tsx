import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';

import {AppContext } from 'context/AppContext';
import { totalmem } from 'os';
const Navbar = () => {
    const { addToCart, removeFromCart, state } = useContext<any | null>(AppContext);
  
     const {cart}  = state;


     const handdledSumQuantity = () => {
        let sum = 0;
        cart.map(item => sum += item.quantity);
        return sum;
    
     }
    
    //  const handdledSumQuantity = () =>{
        
    //  useEffect(() => {
        
    //       const total = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    //       return total;
    //  }, [cart]);
     
     
    //     }
        
        

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
           
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0 justify-content-between d-flex flex-direction-initial'>
                <div>
                <li className='nav-item'>
                     <Link href="/" prefetch={ false }> 
                     <a className='nav-link d-flex align-items-center'> <Image src='https://erickperez.dev/wp-content/uploads/2022/03/avocado.png' width={64} height={64} /> <span>Inicio</span>  </a> 
                     </Link> 
                </li>
                </div>
                <div>
                <li className='nav-item'>
                     <Link href="/cart" prefetch={ false }> 
                     <a className='nav-link d-flex align-items-center'><Image src='https://erickperez.dev/wp-content/uploads/2022/03/basket.png' width={64} height={64} /> <span> Bolsa
                     {
                         <strong>
                             {

                             handdledSumQuantity()
                             }
                         </strong>
                     }
                         </span> </a> 
                     </Link> 
                </li>
                </div>

               
                
            </ul> 
                
            </div>
             
        </nav>
    );
}

export default Navbar;