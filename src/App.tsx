import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { Homepage } from "./Homepage/Homepage";
import { Wizard } from "./Wizard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        {/* <Route path={"/Wizard/:stepNum"} element={<Wizard />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
