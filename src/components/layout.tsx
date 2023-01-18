import * as React from "react";
import { View } from "@aws-amplify/ui-react";
import { NewFooter, NewNav } from "../ui-components";
import Head from "next/head";
import FooterLayout from "./footer-layout";


export default function Layout({ children, handleClick, authText, name }: {children: any, handleClick: () => void, authText: string, name: string}) {
  return (
    <>
      <Head>
        <title>readingmood</title>
        <meta name="description" content="need something to listen to while reading?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FooterLayout>
        <View marginLeft="auto" marginRight="auto">
          <NewNav
            width="100%" gap="unset"
            authText={authText} handleAuth={handleClick} name={name}
            overrides={{
              'NewLogo': { className: 'cursor-pointer' },
              'Menu': { width: 'unset' },
            }}
          />
          {children}
        </View>
      </FooterLayout>
    </>
  );
}
