import Header from "./components/Header";
import AlbumList from "./components/AlbumList";
import AddAlbum from "./components/AddAlbum";
import { useState } from "react";
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <Header />
      <AddAlbum toggle={toggle} setToggle={setToggle} />
      <AlbumList toggle={toggle} setToggle={setToggle}/>
    </div>
  );
}

export default App;
