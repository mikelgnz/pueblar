import "/public/globals.css";
import { Layout } from "@/components/base/Layout";
import { SWRConfig } from "swr";
import { Auth0Provider } from "@auth0/auth0-react";
import { authenticatedFetcher } from "@/lib/api/authenticatedFetcher";
import { useMemo } from "react";

const MyApp = ({ Component, pageProps }) => {
  const origin = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
  }, []);

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        scope: "openid profile email",
        redirect_uri: origin,
      }}>
      <SWRConfig value={{ fetcher: authenticatedFetcher("") }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </Auth0Provider>
  );
};

export default MyApp;
