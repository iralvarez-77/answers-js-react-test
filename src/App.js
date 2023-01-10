import { useEffect, useState } from "react";
import "./styles.css";


let cat;
const API = "5DLmsYN0FBUiA878OTvofVYeYjD0RIQ0";

export default function App() {
  const [data, setData] = useState("");
  const [gift, setGift] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        cat = data.fact.split(" ", 3).join(" ");
        setData(data.fact);
        fetch(`https://api.giphy.com/v1/gifs/search?q=${cat}&api_key=${API}`)
          .then((res) => res.json())
          .then((response) => {
            setGift(response.data[0].images.original.url);
          });
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title"> {data} </h1>
      <img className="image" src={gift} alt="gifts" />
    </div>
  );
}
