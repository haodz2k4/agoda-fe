import Header from "../../../components/Header/Header"
import AttractiveTrips from "./components/AttractiveTrips/AttractiveTrips"
import Hero from "./components/Hero/Hero"

function Home() {
    
    return (
        <>
            <Header/>
            <Hero />
            <div className="container">
                <AttractiveTrips/>
            </div>
        </>
    )
}

export default Home