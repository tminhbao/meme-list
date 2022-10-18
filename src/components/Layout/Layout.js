import { useEffect, useState } from "react";
import Button from "../Button/Button";

function Layout() {
  const [memeList, setMemeList] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeList(data.data.memes));
  }, []);
  //   function handleGetApi() {
  //     useEffect(() => {
  //       fetch("https://api.imgflip.com/get_memes")
  //         .then((res) => res.json())
  //         .then((data) => setMemeList(data.data.memes));
  //     }, []);
  //   }
  return (
    <div>
      <Button />
      <div className="layout">
        <div class="container">
          <div className="grid-container">
            {memeList.map((meme) => (
              <div className="grid-item" key={meme.id}>
                <img src={meme.url} width="100%"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
