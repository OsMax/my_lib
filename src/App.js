import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage/HomePage";

import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import { store, persistor } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";

function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
