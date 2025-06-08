import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/ChooseSkipPageSize";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Index />
  </QueryClientProvider>
);

export default App;
