import App from 'next/app'
import '../asset/css/styles.css'
import { theme } from '../asset/muliStyles/styles';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import Layout from '../components/layouts';
import { Provider } from 'react-redux';
import store from '../store';
import { ChakraProvider } from '@chakra-ui/react';
export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <Provider store={store}>
            <Head>
              <title> EMR </title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
          </ChakraProvider>
    </ThemeProvider>
    
    )
  }
}
