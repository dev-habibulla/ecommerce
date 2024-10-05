import { useState } from "react";
import Router from "./route/Router";
import publicRoutes from "./route/routes/publicRoutes";

function App() {
  let [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
