import s from "../assets/styles/SidebarMenu.module.css"

const SidebarMenu = () => {
    return (
        <div className={s.sidebarmenuWrapper}>
            <div className={s.threeDots}>
                <i className={"fas fa-ellipsis-h"}></i>
            </div>
            <nav>
                <li><i className={"fas fa-home"}></i> <a href="#">Home</a></li>
                <li><i classN={"fas fa-search"}></i> <a href="#">Search</a></li>
                <li><i className={"fas fa-book"}></i> <a href="#">My Library</a></li>
            </nav>
        </div>
    )
}

export default SidebarMenu