// import { data } from '@remix-run/router/dist/utils'
import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { json } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

 function Weather() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() =>{
//       fetch('https://api.github.com/users/hiteshchoudhary')

//       .then(renspons => renspons.json())
//       .then(data=> {

//           setData(data)
//           console.log(data)
//       })

//   },[])
  //useEffect(() => {

//       async function handalapi(params) {
//           try {
//               let renspons = await fetch(
//         "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kolkata&appid=2c374d1ee9e9c048bfe5d557bd9a414d"
//     );

//     let data = await renspons.json();
//     console.log(data)
// } catch (error) {
//     console.log(err);
// }
// cons
// handalapi();
// }
// setData(data);
// },[])

  return (
    <>
      <div className="p-4  text-white bg-gray-700 text-3xl rounded-lg">
        github followrs : {data.name}
        <div className="text-ce ">
          <img src={data.avatar_url} alt="gitpic" />
        </div>
      </div>
    </>
  );
}


export default Weather;

export const gitLoder = async ()=> {
const responce =  await fetch('https://api.github.com/users/hiteshchoudhary')

return responce.json();
}
