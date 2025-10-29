import "./App.css";
import ScrollElement from "./components/ScrollElement";
import Background from "./components/Background";
import Home from "./views/Home";
import Watch from "./views/Watch";
import Listen from "./views/Listen";
import Shows from "./views/Shows";
import Contact from "./views/Contact";
import Bio from "./views/Bio";
import Menu from "./components/Menu";
import { BackgroundProvider } from "./contexts/backgroundContext";

function App() {
  return (
    <>
      <div className="App">
        <BackgroundProvider>
          <Background></Background>
          <Menu />
          <ScrollElement name="home" image="0">
            <Home />
          </ScrollElement>
          <ScrollElement name="Watch" image="1">
            <Watch />
          </ScrollElement>
          <ScrollElement name="Listen" image="2">
            <Listen />
          </ScrollElement>
          <ScrollElement name="shows" image="0">
            <Shows />
          </ScrollElement>
          <ScrollElement name="bio" image="2">
            <Bio />
          </ScrollElement>
          <ScrollElement name="contact" image="3">
            <Contact />
          </ScrollElement>
        </BackgroundProvider>
      </div>
    </>
  );
}

export default App;
