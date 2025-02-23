import Navbar from "./components/Navbar";
import BodySection from "./components/BodySection";
import Feature from "./components/Feature";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import TestDetail from "./components/TestDetail";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <BodySection />
        <Feature />
        <WorkFlow />
        <Price />
        <TestDetail />
        <Footer />
      </div>
    </>
  );
}

export default App;
