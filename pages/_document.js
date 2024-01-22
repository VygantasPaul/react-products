import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the link tag for Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,300;1,400;1,600&display=swap" rel="stylesheet"></link>
        {/* Add any other head elements here */}
        <script src="https://kit.fontawesome.com/89937a7b06.js" crossorigin="anonymous"></script>
        {/* Add any other head elements here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
