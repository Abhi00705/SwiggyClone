import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [searchText,setSearchText] = useState([]);
    const [ResturantMenu,setResturantMenu] = useState([]);
    const [filterResturantMenu,setfilterResturantMenu]= useState([]);
   
    function filterData(ResturantMenu,searchText){
    const data = ResturantMenu.filter((list)=>list?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    return data;
    }

    async function getData(){
              var data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.5940947&lng=85.1375645");
              var jsonData = await data.json();
              
              setResturantMenu(jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
              setfilterResturantMenu(jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
              
              console.log(ResturantMenu);
              console.log(typeof ResturantMenu);
             

    }
    useEffect(()=>{
      getData();
      
    },[])
            
    if(!filterResturantMenu){
      return (<h1>No Resturant found ! </h1>);
    }
    
    return (ResturantMenu.length===0)? (<Shimmer/>) : (
        <>
{/* searach function  */}
          <div className="justify-self-center my-2">
                    <input 
                    type='text' 
                    placeholder='search' 
                    className='p-1 w-96 font-sans size-10 rounded-md border-2 border-black'
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />

                    <button
                    className='p-2 w-20 bg-gray-200 rounded-md mx-2'
                    onClick={()=>{
                      const filterList = filterData(ResturantMenu,searchText);
                      setfilterResturantMenu(filterList);
                    }}

                    >search</button>
          </div>
 
{/* menu card               */}
          <div  className=" flex flex-wrap gap-5 mx-9 my-5 " >
          {

            filterResturantMenu.map((data)=>{
                return(<RestCard  {...data?.info}/> );
            })

          }

          </div>
           
           
        </>
    );
}
export default Body;