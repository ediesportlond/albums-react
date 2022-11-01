export default function AlbumCard({ album }) {
    return (
        <div className="album">
            <h3 key={album.albumId}>{album.albumName}</h3>
            <p>{album.artist}</p>
        </div>
    )
}