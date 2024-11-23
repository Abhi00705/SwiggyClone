import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import { addItem } from "../../utils/ResturantListSlice";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const [ResturantMenu, setResturantMenu] = useState([]);
  async function getData() {
    var data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.907524&lng=75.739639&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
   

    setResturantMenu(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

   
  }
  
  useEffect(()=>{
   getData();
  },[])


  useEffect(() => {
    if (ResturantMenu.length>0) {
      console.log("Items are read yto Dispatch ",ResturantMenu)
      dispatch(addItem(ResturantMenu));
    }
  }, [ResturantMenu]);

 

  return (
    <>
      {ResturantMenu ? (
        <div className=" flex flex-wrap gap-5 justify-center my-5 ">
          {ResturantMenu.map((data, index) => {
            return <RestCard key={index} {...data?.info} />;
          })}
        </div>
      ) : (
        <div>Restaurants Not fetch Yet</div>
      )}
    </>
  );
};
export default Body;
