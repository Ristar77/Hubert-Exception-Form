import CompanyLogo from "./components/CompanyLogo";
import BotImage from "./components/BotImage";
import ExceptionForm from "./components/ExceptionForm";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <CompanyLogo className="logo-left" />
        <h1 className="header-title"></h1>
        <CompanyLogo className="logo-right" />
      </header>
      {/* Main Content */}
      <main>
        <ExceptionForm />
        <div className="bot-image-container">
          <BotImage />
        </div>
      </main>
    </div>
  );
}

export default App;
