import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      <Navbar />
      <TextForm heading="Enter the text to analyze" />
    </div>
  );
}

export default App;
