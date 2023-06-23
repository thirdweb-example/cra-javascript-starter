import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div class="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a href="https://thirdweb.com/">thirdweb.</a>
            </span>
          </h1>

          <p className="description">
            Get started by configuring your desired network in{" "}
            <code className="code">src/index.js</code>, then modify the{" "}
            <code className="code">src/App.js</code> file!
          </p>

          <div className="connect">
            <ConnectWallet
              dropdownPosition={{ side: "bottom", align: "center" }}
            />
          </div>
        </div>

        <div className="grid">
          <a href="https://portal.thirdweb.com/" className="card">
            <img
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
            ></img>
            <div className="card-text">
              <h2 className="gradient-text-1">Portal ➜</h2>
              <p>
                Guides, references and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>

          <a href="https://thirdweb.com/dashboard" className="card">
            <img
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
            ></img>
            <h2 className="gradient-text-2">Dashboard ➜</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <img
              src="/images/templates-preview.png"
              alt="Placeholder preview of templates"
            ></img>
            <h2 className="gradient-text-3">Templates ➜</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
