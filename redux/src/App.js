import { Route, Routes } from "react-router-dom";
import { PostContextProvider } from "./context/post-context";
import HomePage from "./pages/home/index";
import { LoginPage } from "./pages/login/index";

function App() {
  return (
    <div>
      <PostContextProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </PostContextProvider>
    </div>
  );
}

export default App;
