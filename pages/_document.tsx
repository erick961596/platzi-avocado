import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html>
      <Head />
      {/*styles */}
      {/* <body> */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      
      <body className='my-body-class'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}