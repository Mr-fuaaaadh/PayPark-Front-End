import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Move next/script components here if using beforeInteractive */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
