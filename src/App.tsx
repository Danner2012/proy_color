import ColorHarmonizer from "./assets/components/ColorHarmonizer"
import ContrastChecker from "./assets/components/ContrastChecker"
import RandomColorFlower from "./assets/components/RandomColorFlower"

function App() {


  return (
    <div className="App">
      <h1>Clase de color con react</h1>
      <ColorHarmonizer />
      <hr />
      <ContrastChecker />
      <RandomColorFlower />
    </div>
  )
}

export default App
