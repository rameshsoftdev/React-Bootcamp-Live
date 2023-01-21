import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return <>
       <div>
           <h1>Error component</h1>
           <h2>{err.status + " :  " + err.statusText}</h2>s
       </div>
    </>
}
export default Error;