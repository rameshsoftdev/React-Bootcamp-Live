const Shimmer = ()=>{
    return (
       <>
         <div className="shimmer-list">
             {
                Array(10).fill('').map((value, index)=>{
                    return <div key={index} className="shimmer-card"></div>
                })
             }
         </div>
       </>
    );
}
export default Shimmer;