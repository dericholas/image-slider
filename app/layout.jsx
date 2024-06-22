import "./globals.scss";


export const metadata = {
  title: "Image slider",
  description: "Image carousel component with React.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
