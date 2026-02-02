import { BudgetProvider } from "./contexts/BudgetContext";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <BudgetProvider>
      <Navbar />
      <ProductsPage />
    </BudgetProvider>
  );
}
