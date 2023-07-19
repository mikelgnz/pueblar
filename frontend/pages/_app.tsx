import { UserContext } from "@/lib/context/useUser";
import "/public/globals.css";
import { Layout } from "@/components/base/Layout";
import { Auth0Provider } from "@auth0/auth0-react";

const MyApp = ({ Component, pageProps }) => {
  return (
    
    <UserContext.Provider value={{ user: { name: "Juan Pablo" } }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
};

export default MyApp;
