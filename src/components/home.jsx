import { Link } from "react-router-dom";
import "./home.css";


const Home = () => {
    return (
    <div className="home-page">
        <div class="jumbotron">
            <h1>Hello, Karen!</h1>
            <p>Welcome to your one stop shop for the gear you crave!</p>
        </div>
        <div className="text-over-img">
            <h3>"...I'd like to speak with a manager, now!!!"</h3>
        </div>
        <div>
            <img className="image" src={"./images/akaren.jpg"}alt="..."></img>
        </div>
        <div className="catalog-link"><Link className="btn btn-lg" to="/catalog" >Wanna see what you're missing?</Link></div>
        
    </div>
    );
};

export default Home;