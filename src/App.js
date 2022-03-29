import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import MainContainer from "./Component/MainContainer/MainContainer";

function App() {
  return (
    <div className="body">
      <Header></Header>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
