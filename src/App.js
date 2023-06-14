import logo from './logo.svg';
import './App.css';
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { Item } from "./Components/Item";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="container mb-4">
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
