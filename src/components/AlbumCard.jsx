export default function AlbumCard({ album }) {
    return (
        <div className="album">
            <h3 key={album.albumId}>{album.album}</h3>
            <p>{album.artist}</p>
            <p>{album.year}</p>
        </div>
    )
}