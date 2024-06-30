import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
