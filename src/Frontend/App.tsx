import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { Homepage } from "./Homepage/Homepage";
import { Wizard } from "./Wizard";
import { WizardProvider } from "./shared/contexts/WizardContext";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route
          path={"/Wizard"}
          element={
            <WizardProvider>
              <Wizard />
            </WizardProvider>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
