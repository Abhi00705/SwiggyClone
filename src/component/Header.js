import React,{ useState } from 'react';
import { IMG_CDN } from '../asset/config';


const Header = ()=>{
    return(
        <>
            <div className="flex items-center  w-100vw h-28  bg-orange-200 justify-between">
                <div >
                <img src={IMG_CDN} alt="Swiggy Logo" className="w-30 h-28 m-5"/>

                </div>

                

                <div className='m-5'>
                    <ul className='flex gap-2'>
                        <li>Home</li>

                        <li>Cart</li>

                        <li>Login</li>

                        <li>Contact us</li>
                    </ul>    
                </div>      
            </div>
        </>
    );
} ;
export default Header;