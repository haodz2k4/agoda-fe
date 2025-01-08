import Footer from "../../../components/Footer/Footer"
import Header from "../../../components/Header/Header"
import AttractiveTrips from "./components/AttractiveTrips/AttractiveTrips"
import FeaturedHomes from "./components/FeaturedHomes/FeaturedHomes"
import Hero from "./components/Hero/Hero"

function Home() {
    
    return (
        <>
            <Header/>
            <Hero />
            <div className="container">
                <AttractiveTrips/>
                <FeaturedHomes/>
            </div>
            <Footer/>
        </>
    )
}

export default Home