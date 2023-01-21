import { useEffect } from "react";

const FunctionalProfile = ()=>{
    useEffect(()=>{
       let timer = setInterval(()=>{
             console.log('setInterval in FunctionalProfile');
        },1000);
        console.log(' Functional Profile useEffect');

        // Clean up function and it will be called when this component about to destroyed.
        return ()=>{
            clearInterval(timer);
        }
    });
    console.log(' Functional Profile render');
   
    return <>
       <h2>Functional Profile</h2>
    </>
}
export default FunctionalProfile;