import HomeNavBar from "../../components/home/navbar/HomeNavBar";
import "../global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <HomeNavBar />
        </header>
        <div className="body_wrapper">{children}</div>
      </body>
    </html>
  );
}
