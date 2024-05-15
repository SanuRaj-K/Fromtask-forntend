import { Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import TableView from "./Components/TableView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<TableView />} />
      </Routes>
    </div>
  );
}

export default App;
