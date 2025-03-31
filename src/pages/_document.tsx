import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Love & Hockey 2025</title>
      <Head>
          <meta property="og:title" content="Love & Hockey 2025" />
          <meta property="og:description" content="Descubre equipos e invitados especiales en esta edición del Love & Hockey." />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:url" content="https://tu-dominio.com" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Descubre equipos e invitados especiales en esta edición del Love & Hockey." />
          <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=0" />
          <meta name="theme-color" content="#f0d5b7" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
