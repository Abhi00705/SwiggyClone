import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import { addItem } from "../../utils/ResturantListSlice";
import { useDispatch ,useSelector} from "react-redux";


const Body=()=>{

   
    const dispatch = useDispatch();
    const [ResturantMenu,setResturantMenu] = useState([]);
   
   
    

    async function getData(){
              var data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.1196607&lng=85.390982");
              var json = await data.json();
              
              setResturantMenu(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
              
              
              dispatch(addItem(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants))
              // setResturantMenu(useSelector(store=>store.ResturantList.items));
              setResturantMenu(ResturantMenu);
             

    }
    useEffect(()=>{
      getData();
      
    },[])
            

    console.log(typeof ResturantMenu);
    console.log(ResturantMenu)

    return (
        <>
          <div  className=" flex flex-wrap gap-5 justify-center my-5 " >
          {

            ResturantMenu.map((data)=>{
                return(<RestCard  {...data?.info}/> )
            })

          }

          </div>
           
           
        </>
    );
}
export default Body;