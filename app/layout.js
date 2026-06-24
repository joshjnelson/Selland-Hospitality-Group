import Script from "next/script";
import "./globals.css";

const GA_ID = "G-NXCGS4L248";

export const metadata = {
  title: "Selland Hospitality Group",
  description: "Restaurant links for Selland Hospitality Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/1c58c213284051062077eb8dfb726790/script.js"
        strategy="afterInteractive"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </html>
  );
}
