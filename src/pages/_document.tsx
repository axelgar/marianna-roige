import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Marianna Roigé Yoga</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="description" content="Formación de Yoga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/test-logo.png" />
      </Head>
      <body className="min-h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
