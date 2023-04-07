import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  //this page customizes the App component which initializes pages
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
