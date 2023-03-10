import { useReducer } from "react";
import "./App.css";
import DetailCard from "./components/DetailCard";
import EmptyCard from "./components/EmptyCard";
import History from "./components/History";
import { QueryClient, QueryClientProvider } from "react-query";
import Formulario from "./components/Formulario";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <div className="result">
          <Formulario />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
