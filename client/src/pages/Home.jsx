import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";
import Map from "../components/Map";

const Home = () => {
    return (
        <>
            <Navbar />
            <Map />
        </>
    );
};

export default withAuth(Home);