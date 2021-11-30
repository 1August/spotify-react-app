import s from "../assets/styles/Header.module.css"
import "../assets/styles/styles.css"

const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.arrowIcons}>
                {/*<i className="fas fa-arrow-circle-left" id={s.arrowLeft}/>*/}
                {/*<i className="fas fa-arrow-circle-right" id={s.arrowRight}/>*/}
                <i className="fas fa-chevron-left" id={s.arrowLeft}/>
                <i className="fas fa-chevron-right" id={s.arrowRight}/>
            </div>

            <div className={s.accountIcons}>
                <button>Upgrade</button>
                <div className={s.profile}>
                    <div className={s.profileWrapper}>
                        <div className={s.profileImg}></div>
                        <p className={"m-0"}>Giant</p>
                        <i className="fas fa-caret-down"></i>
                    </div>
                    <div className={s.dropdownProfileMenu}>
                        <ul className={"navList"}>
                            <li><a href={"#"}>Account</a></li>
                            <li><a href={"#"}>Profile</a></li>
                            <li><a href={"#"}>Upgrade to Premium</a></li>
                            <li><a href={"#"}>Private session</a></li>
                            <li><a href={"#"}>Settings</a></li>
                            <hr/>
                            <li><a href={"#"}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;