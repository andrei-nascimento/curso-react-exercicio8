import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescriptionRecipe from "./DescriptionRecipe";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:recipesId" element={<DescriptionRecipe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
