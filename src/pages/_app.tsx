import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marci Metzger Homes - Real Estate Agent, Real Estate, Realtor</title>
        <meta
          name="description"
          content="Marci Metzger Homes - Pahrump, NV - Over two decades in real estate. Licensed Broker in Seattle, now serving Southern Nevada as Pahrump's top real estate agent."
        />
        <meta name="author" content="Marci Metzger Homes" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
