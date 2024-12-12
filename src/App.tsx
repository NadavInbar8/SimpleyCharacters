import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { Homepage } from "./Homepage/Homepage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
      </Routes>
    </Layout>
  );
}

export default App;
