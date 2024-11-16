import AuthProvider from "@/Providers/AuthProvider";
import "./globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
