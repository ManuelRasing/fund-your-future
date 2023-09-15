import "@styles/globals.css";
import "@styles/home.css";
import { children } from "react";

export const metadata = {
  title: "Fund Your Future",
  description: "Empowering Dreams, Funding Futures",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
