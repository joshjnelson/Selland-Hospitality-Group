import "./globals.css";

export const metadata = {
  title: "SHG Linktree",
  description: "Selland Hospitality Group links",
  // These tell the browser you support both, which affects system UI rendering.
  colorScheme: "light dark",

  // Critical: set system UI colors per scheme (Android address bar + nav bar area).
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ebe3d7" }, // paper (light)
    { media: "(prefers-color-scheme: dark)", color: "#1b1c14" },  // dark paper (dark)
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Extra explicit tags to make Android behave consistently across browsers */}
        <meta name="color-scheme" content="light dark" />

        {/* Android system UI background behind 3-button nav */}
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ebe3d7"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#1b1c14"
        />

        {/* Some Android browsers respect this for the page “canvas” background */}
        <meta
          name="background-color"
          media="(prefers-color-scheme: light)"
          content="#ebe3d7"
        />
        <meta
          name="background-color"
          media="(prefers-color-scheme: dark)"
          content="#1b1c14"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
