import s from "../assets/styles/SidebarMenu.module.css"
import "../assets/styles/styles.css"

const SidebarMenu = () => {

    const listOfLikedSongs = [
        {
            name: "Song1",
            artist: "Artist1",
            publishedYear: 2021,
            genres: ["EDM", "Rock", "K-Pop"],
            link: "https://google.com"
        },
        {
            name: "Song2",
            artist: "Artist2",
            publishedYear: 2021,
            genres: ["EDM", "Rock", "K-Pop"],
            link: "https://google.com"
        },
        {
            name: "Song3",
            artist: "Artist3",
            publishedYear: 2021,
            genres: ["EDM", "Rock", "K-Pop"],
            link: "https://google.com"
        },
        {
            name: "Song4",
            artist: "Artist4",
            publishedYear: 2021,
            genres: ["EDM", "Rock", "K-Pop"],
            link: "https://google.com"
        },
        {
            name: "Song5",
            artist: "Artist5",
            publishedYear: 2021,
            genres: ["EDM", "Rock", "K-Pop"],
            link: "https://google.com"
        }
    ]

    return (
        <aside className={"sidebarMenu"}>
            <div className={s.threeDots}>
                <a href="#">
                    <i className={"fas fa-ellipsis-h"}/>
                </a>
            </div>
            <div className={s.navigationGroup}>
                <nav>
                    <ul className={s.sidebar_navigation + " navList"}>
                        <li><a href="#" className={s.active}><i className={"fas fa-home"}/> Home</a></li>
                        <li><a href="#"><i className={"fas fa-search"}/> Search</a></li>
                        <li><a href="#"><i className={"fas fa-book"}/> My Library</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className={s.sidebar_navigation + " navList"}>
                        <li><a href="#"><i className={"fas fa-plus-square"}/> Create Playlist</a></li>
                        <li><a href="#"><i className={"fas fa-heart"}/> Liked Songs</a></li>
                    </ul>
                </nav>
            </div>
            <hr/>
            <div /*className={s.likedSongsList}*/>
                <ul className={s.likedSongsList + " navList"}>
                    {listOfLikedSongs.map(el => {
                        return(
                            <li><a href={el.link}>{`${el.name} - ${el.artist} : ${el.publishedYear}`}</a></li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}

export default SidebarMenu