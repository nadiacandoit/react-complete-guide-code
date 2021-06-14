import Layout from '../components/layout/Layout';
import '../styles/globals.css';

// root component that is rendered by next js
// component - holds page contents that should be renderd 
//  special file to have to apply common style here!  
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
