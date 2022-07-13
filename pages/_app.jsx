// import App from 'next/app'

import "../styles/global/global.scss"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Раскомментируйте этот метод только в том случае, если 
//  у вас есть требования к блокировке данных для
//  каждая страница вашего приложения. Это отключает возможность
//  выполнить автоматическую статическую оптимизацию, в результате чего каждая страница в вашем приложении
//  будет обработанным на стороне сервера. ( SSR )
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp