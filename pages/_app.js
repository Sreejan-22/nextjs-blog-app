import App from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageprops }) {
  return <Component {...pageprops} />;
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default App;
