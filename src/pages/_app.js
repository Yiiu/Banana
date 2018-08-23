import App, {Container} from 'next/app';
import Router from 'next/router'
import React from 'react';

export default class MyApp extends App {
  // static async getInitialProps({ res, router }) {
  //   // console.log(router);
  //   if (router.route !== '/hello') {
  //     console.log(res)
  //   }
  //   return {};
  // }
  render () {
    const {Component, pageProps} = this.props;
    return <Container>
      <Component {...pageProps} />
    </Container>;
  }
}
