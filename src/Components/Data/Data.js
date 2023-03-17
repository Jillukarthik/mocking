import React, { useEffect, useState } from "react";
import "./Data.css"
function Data() {
  const [set, setdata] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    let dataValue=fetch("https://jsonplaceholder.typicode.com/users")
    dataValue.then((res) => res.json()).then((e)=>setdata(e))
    dataValue.catch(() => seterror("ërror"));
  }, []);

  console.log(set, "data");
  console.log(error,"fghjkl")
  return (
    <div className="data">
        <h1>{error && "error"}</h1>
        <ul>
      {set.map((x) => (
        <li key={x.id}>
          <h1>{x.name}</h1>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Data;
