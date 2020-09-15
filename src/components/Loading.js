import React from "react";
import loader from "../index.css"

 //function sleep(ms) {
   //  return new Promise(resolve => setTimeout(resolve, ms));
  // }










  



const Loading = ({i}) => {
    const message = "LOADING";
    return (
    <div>
    <div className="loader"></div>
    {/* // <div className="tc"> <h1>{message[i]}</h1> */}
    </div>
    )
}

export default Loading;


















// const CardList = ({
//     robots
// }) => {


//     return ( <
//         div > {
//             robots.map((user, i) => {
//                 return <Card
//                 key = {
//                     i
//                 }
//                 id = {
//                     robots[i].id
//                 }
//                 name = {
//                     robots[i].name
//                 }
//                 email = {
//                     robots[i].email
//                 }
//                 />
//             })
//         }

//         <
//         /div>
//     )
// }