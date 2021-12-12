import { Link } from "react-router-dom";


const Home = () => {
    return (
    <div className="home-page">
        <h1>Hey Karen, Glad you could make it</h1>
        <h3>The gear you need to grind</h3>

        <Link className="btn btn-info btn-block" to="/catalog" >Wanna see what you're missing?</Link>
    </div>
    );
};

export default Home;