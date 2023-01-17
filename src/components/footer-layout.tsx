import * as React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { NewFooter, NewNav } from "../ui-components";
import Head from "next/head";


export default function FooterLayout({ children }: {children: any}) {
  return (
    <Flex direction="column" height="100%">
      <View flex="1">
        {children}
      </View>
      <View>
        <NewFooter width="100%" gap="unset"/>
      </View>
    </Flex>
  );
}
