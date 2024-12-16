import About from "./About";
import Hero from "./Hero";
import Home_service from "./Home_service";

 

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <div className="py-10"></div>
            <Home_service></Home_service>
            <div className="py-10"></div>
        </div>
    );
};

export default Home;