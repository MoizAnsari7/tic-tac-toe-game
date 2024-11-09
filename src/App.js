import './App.css';
import GameArea from "./gameArea.component"
function App() {
return (<>
  <div className="container" style={{ marginTop : "11px" }}>
    <div className="header"></div>
    <div className="gameArea">
      Tic Tac Tae
    </div>
      <GameArea />
  </div>
</>)
}
export default App;
