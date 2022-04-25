import "../src/Assets/scss/main.scss";
import { wrapper } from "../store/store";
import Layout from "../src/Components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);
