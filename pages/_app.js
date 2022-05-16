import "../src/Assets/scss/main.scss";
import { wrapper } from "../store/store";
import Layout from "../src/Components/layout/layout";
import {Provider} from '../src/Context/GlobalState' 

function MyApp({ Component, pageProps }) {
  return (
    <Provider >
      <Layout>
          <Component {...pageProps} />;
      </Layout>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp);
