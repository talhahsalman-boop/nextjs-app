
import Navbar from "./components/Navbar";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full antialiased"}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
      <ReduxProvider>
        <Navbar />
        {children}
    </ReduxProvider>
      </body>
    </html>
  );
}
