import React,{ useState } from 'react';
import { IMG_CDN } from '../asset/config';


const Header = ()=>{
    const [searchText,setSearchText] = useState("");
    
    return(
        <>
            <div className="flex items-center  w-100vw h-36  bg-orange-200 justify-between">
                <div >
                <img src={IMG_CDN} alt="Swiggy Logo" className="w-30 h-28 m-5"/>

                </div>

                <div className="">
                    <input 
                    type='text' 
                    placeholder='search' 
                    className='p-1 w-96 font-sans size-10 rounded-md'
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />

                    <button
                    className='p-2 w-20 bg-gray-200 rounded-md mx-2'
                     

                    >search</button>
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