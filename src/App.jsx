// import logo from './logo.svg';
import React from "react";
import "./App.css";
import "./Styles/Switcher.scss";
import { Cards } from "./Components/Cards";
import { Carousels } from "./Components/Carousel";
import Navbar from "./Components/Nav";
import { collection, getDocs } from "firebase/firestore";
import { PreLoader } from "./Components/Loader";
import { db } from "./Firebase";
import Footer from "./Components/footer";
class App extends React.Component {
  state = {
    TopWalls: [],
    DesktopWalls: [],
    Setups: [],
    GamingWalls: [],
    loading: true,
  };
  componentDidMount() {
    this.setState({ loading: false });
    const DbCollection = collection(db, "TopWalls");
    getDocs(DbCollection).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.TopWalls.push({ ...doc.data(), id: doc.id });
        this.setState({ isLoading: true });
      });
    });
    getDocs(collection(db, "DeskstopWalls")).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.DesktopWalls.push({ ...doc.data(), id: doc.id });
        this.setState({ isLoading: true });
      });
    });
    getDocs(collection(db, "GamingWalls")).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.GamingWalls.push({ ...doc.data(), id: doc.id });
        this.setState({ isLoading: true });
      });
    });
    getDocs(collection(db, "Setup")).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.Setups.push({ ...doc.data(), id: doc.id });
        this.setState({ isLoading: true });
      });
    });
  }

  render() {
    return this.state.loading ? (
      <div>
        <PreLoader />
      </div>
    ) : (
      <div>
        <Navbar />
        <div>
          <Carousels data={this.state.TopWalls} />
        </div>
        <Cards
          Desk={this.state.DesktopWalls}
          Game={this.state.GamingWalls}
          Setup={this.state.Setups}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
