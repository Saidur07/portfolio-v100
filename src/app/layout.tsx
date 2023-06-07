import "./globals.css";

export const metadata = {
  title: "Programmer Saidur • A Creative Front-End Web Dev From Bangladesh",
  description:
    "Programmer Saidur • A Creative Front-End Web Dev From Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
