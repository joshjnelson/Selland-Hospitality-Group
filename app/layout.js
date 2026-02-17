import "./globals.css";

export const metadata = {
  title: "Selland Hospitality Group",
  description: "Restaurant links for Selland Hospitality Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
