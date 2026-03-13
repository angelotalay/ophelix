import React from "react";


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
    <body className={`w-dvw antialiased`}>

    {children}
    </body>
    </html>
  );
}