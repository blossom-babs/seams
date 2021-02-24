import { Login, Dashboard, Footer } from "./components";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Login />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
