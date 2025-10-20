import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FencingPage from "./pages/FencingPage";
import SandwichPanelPage from "./pages/SandwichPanelPage";
import ShuttersPage from "./pages/ShuttersPage";
import CanopiesPage from "./pages/CanopiesPage";
import WarehousesPage from "./pages/WarehousesPage";
import WarehousesDetailPage from "./pages/WarehousesDetailPage";
import CladdingPage from "./pages/CladdingPage";
import DoorsPage from "./pages/DoorsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fencing" element={<FencingPage />} />
          <Route path="/sandwich-panel" element={<SandwichPanelPage />} />
          <Route path="/shutters" element={<ShuttersPage />} />
          <Route path="/canopies" element={<CanopiesPage />} />
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/warehouses-detail" element={<WarehousesDetailPage />} />
          <Route path="/cladding" element={<CladdingPage />} />
          <Route path="/doors" element={<DoorsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
