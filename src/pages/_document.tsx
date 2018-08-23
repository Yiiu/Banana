import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class extends Document {
  static async getInitialProps(args: any) {
    const documentProps = await Document.getInitialProps(args)
    // const {renderPage} = args[0]
    // const page = renderPage()

    return {...documentProps}
  }

  render() {
    return (
      <html lang="ko">
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <meta property="og:type" content="website"/>
        <meta name="format-detection" content="telephone=no, address=no, email=no"/>

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="/static/img/favicon.ico"/>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}
