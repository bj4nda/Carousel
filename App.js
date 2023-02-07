import {SliderData} from "./Components/Data"
import ImageSlider from "./Components/ImageSlider"
import "./App.css"

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData} />
    </div>
  )
}

export default App
