import LoadParent from "./components/Loading/LoadParent";
import Home from "./components/LandingPage/Home";
import MenuPage from "./components/Menu/MenuPage";

const App = () => {
  return (
    <div className="h-screen bg-[#111] overflow-hidden">
          <MenuPage />
          <LoadParent />
          <Home />
    </div>
  )
}

export default App;
