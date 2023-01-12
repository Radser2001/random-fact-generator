import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Math from "./components/Facts/Math";
import Year from "./components/Facts/Year";
import Trivia from "./components/Facts/Trivia";

import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Home from "./components/UI/Home";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/math" element={<Math />} />
            <Route path="/year" element={<Year />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}

export default App;
