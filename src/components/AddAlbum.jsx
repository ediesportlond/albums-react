import { useState } from "react"
export default function AddAlbum({toggle, setToggle}) {

    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [year, setYear] = useState(2000);

    const handleSubmit = (e) => {
        //prevents page from refreshing when "enter" is pressed.
        e.preventDefault();
        if (!album || !artist) {
            alert("Please complete all fields");
            return
        }
        const newAlbum = { artist, album, year }
        fetch("https://albums-api-ee.web.app/albums", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
            .then(res => res.json())
            .then((res) => {
                setAlbum("");
                setArtist("");
                setYear(2000);
                setToggle(!toggle);
            })
            .catch(alert)
    }

    return (
        <>
            <section className="add-album">
                <h3>Add new album</h3>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="album">Album Name: </label>
                    <input required type="text" name="album"
                        value={album} onChange={e => setAlbum(e.target.value)} />

                    <br />

                    <label htmlFor="artist">Artist Name: </label>
                    <input required type="text" name="artist"
                        value={artist} onChange={e => setArtist(e.target.value)} />

                    <br />

                    <label htmlFor="year">Year : </label>
                    <input required type="number" name="year"
                        value={year} onChange={e => setYear(e.target.value)} />

                    <br />

                    <input type="submit" value="Add Album" />

                </form>
            </section>
        </>
    )
}