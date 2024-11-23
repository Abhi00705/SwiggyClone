import { IMG_PREFIX } from "../asset/config";
const RestCard=({cloudinaryImageId,name,cuisines,costForTwo,avgRating ,id })=>{
    return(
    
            <div className="w-56 h-auto border-2 border-black p-2" key={id}>
                <div key={1}>
                    <img src={IMG_PREFIX + cloudinaryImageId} alt="cardImage" className=""/>
                </div >
                <div key={2} className="font-extrabold">{name}</div>
                <div key={3} className=" font-bold text-gray-700">{costForTwo}</div>
                <div key={4} className=" font-bold text-gray-700">{avgRating}</div>
                {/* <div key={5}>{cuisines.join(", ")}</div> */}
                
            </div>
        
    );
}
export default RestCard;
