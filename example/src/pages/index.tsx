import { Link, List, Text } from "@vercel/examples-ui";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unleash with Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text variant="h1" className="mb-8">
        Unleash with Next.js
      </Text>

      <List variant="ul" className="my-2">
        <li>
          <Link href="/csr">CSR &ndash; Client Side Rendering</Link>
        </li>
        <li>
          <Link href="/ssr">SSR &ndash; Server Side Rendering</Link>
        </li>
        <li>
          <Link href="/ssr">SSG &ndash; Static Site Generation</Link>
        </li>
        <li>
          <Link href="/app-page">
            <strong>App directory page &ndash; server component</strong>
          </Link>
        </li>
        <li>
          <Link href="/api-route">
            App directory route handler &ndash; JSON response
          </Link>
        </li>
        <li>
          <Link href="/api/hello">
            API &ndash; JSON response with Pages Router
          </Link>
        </li>
        <li>
          <Link href="/ab">Middleware &ndash; A/B testing with Next.js</Link>
        </li>
      </List>
    </>
  );
}
