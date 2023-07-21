import "/public/globals.css";
import { Layout } from "@/components/base/Layout";
import { Auth0Provider } from "@auth0/auth0-react";

const MyApp = ({ Component, pageProps }) => {
  let rewindow;

  if (typeof window !== "undefined") {
    rewindow = window.location.origin;
  }
  
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: rewindow,
      }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
};

export default MyApp;
