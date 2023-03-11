import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";
import Map from "../components/Map";
import Graph from "../components/Graph";

const Home = () => {
    return (
        <>
            <Navbar />
            <Map />
            <Graph />
        </>
    );
};

export default withAuth(Home);