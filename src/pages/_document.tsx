import { Whatsapp } from "@/components/Whatsapp";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta
          name="description"
          content="Marianna Roigé. Formación de Ioga. Classes de Ioga per a nens i nenes. Ioga adaptat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://storage.googleapis.com/mariannaroige-images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
        <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet" />
      </Head>
      <body className="min-h-full relative">
        <Main />
        <NextScript />
        <Whatsapp />
      </body>
    </Html>
  );
}
