export default function AlbumCard({ album, toggle, setToggle }) {
    const deleteAlbum = () => {
        const url = `https://albums-api-ee.web.app/albums/delete`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: album.albumId})
        }
        fetch(url, options)
        .then(res=>{
            setToggle(!toggle);
        })
        .catch(console.error)
    }
    return (
        <div className="album">
            <h3 key={album.albumId}>{album.album}</h3>
            <p>{album.artist}</p>
            <p>{album.year}</p>
            <button onClick={deleteAlbum}>Delete Me</button>
        </div>
    )
}