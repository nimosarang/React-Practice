import Footer from "./Footer";
import Header from "./Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <div>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
