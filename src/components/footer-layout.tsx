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
        <NewFooter
          width="100%" gap="unset"
          overrides={{
            'NewHero': { width: '100%' },
            'Frame 28': { width: { base: '90%', medium: '70%' }, marginBottom: { base: '30px', medium: '10px' } },
            '\u00A9 Copyright piqbubble 2023': {marginTop: '5px'},
          }}
        />
      </View>
    </Flex>
  );
}
