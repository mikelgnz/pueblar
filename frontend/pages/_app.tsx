import "/public/globals.css";
import { Layout } from "@/components/base/Layout";
import { SWRConfig } from "swr";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { authenticatedFetcher } from "@/lib/api/authenticatedFetcher";
import { useState, useEffect, useMemo } from "react";

const AuthenticatedApp: React.FC<{ children: any }> = ({ children }) => {
  const [token, setToken] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently()
      .then((myToken) => {
        setToken(myToken);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
    <SWRConfig value={{ fetcher: authenticatedFetcher(token) }}>
      <Layout>
        {token && children}
      </Layout>
    </SWRConfig>
  );
};

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
};

export default MyApp;
