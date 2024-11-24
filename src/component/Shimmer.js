const Shimmer = ()=>{
    return(
        <>
            <div className="flex justify-center flex-wrap gap-5 my-10">
                {Array(12)
                .fill("")
                .map((e,index)=>(<div key={index} className="w-56 h-72 bg-gray-300"></div>))}
            </div>
        
        </>
    )
}
export default Shimmer;