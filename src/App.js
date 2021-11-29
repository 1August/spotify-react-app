import SidebarMenu from "./components/SidebarMenu"
import Player from "./components/Player"
import MainContent from "./components/MainContent"
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <SidebarMenu/>
            <MainContent/>
            <Player/>

            {/*<main>*/}
            {/*    smth*/}
            {/*  /!*<header>*!/*/}

            {/*  /!*</header>*!/*/}
            {/*  /!*<section>*!/*/}

            {/*  /!*</section>*!/*/}
            {/*</main>*/}
        </div>
    )
}

export default App