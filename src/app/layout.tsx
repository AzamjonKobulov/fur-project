import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/navbar/Nav";
import { LanguageProvider } from "./contexts/LanguageContext";
import { MenuProvider } from "./contexts/MenuContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Мебельный тур в Китай</title>
      </head>
      <LanguageProvider>
        <body>
          <MenuProvider>
            <Nav />
          </MenuProvider>
          <main>{children}</main>
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
