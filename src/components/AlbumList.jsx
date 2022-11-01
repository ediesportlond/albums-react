import { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";

export default function AlbumList() {
    const [albums, setAlbums] = useState();
    const getAlbums = () => {
        fetch("https://albums-api-ee.web.app/albums")
            .then(albums => albums.json())
            .then(albums => setAlbums(albums.message))
            .catch(console.error)
    }
    useEffect(getAlbums, []);
    return (
        <main className="album-list">
            <h2>Albums go here</h2>
            {
                !albums
                    ? <p>Loading...</p>
                    : albums.map(album => (
                        <AlbumCard album={album} />
                    ))
            }
        </main>
    )
}