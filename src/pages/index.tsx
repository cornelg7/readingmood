import { type NextPage } from "next";
import { View } from "@aws-amplify/ui-react";
import {
  NewHero,
  NewMarketingPricing,
  NewPersuade,
  NewTestimony, NewTestimonyGroup
} from "../ui-components";
import Layout from "../components/layout";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const handleSignUp = () => {
    console.log('signup');
  }

  return (
    <>
      <Layout handleClick={() => handleSignUp()} authText="Sign Up" name="none">
        <View>
          <NewHero paddingBottom="100px" mainEventHandler={() => handleSignUp()} secondaryEventHandler={async () => {await router.push('/demo')}}/>
        </View>
        <View>
          <NewPersuade
            width="100%" src="/read-and-listen-banner.png" handleClick={() => handleSignUp()}
            overrides={{
              'Become a member to get 200 book recommendations per month!': {width: {base: '90%', medium: '70%'}},
              'Banner': {height: 'unset'},
            }}
          />
        </View>
        <View marginTop="40px">
          <NewMarketingPricing
            width="100%" handleClickOne={async () => {await router.push('/demo')}} handleClickTwo={() => handleSignUp()} handleClickThree={() => handleSignUp()}
            direction={{base: 'column', large: 'row'}}
            overrides={{
              'Frame 63': {direction: {base: 'column', medium: 'row'}, width: {base: '390px', medium: 'auto'}, alignItems: 'center'}
            }}
          />
        </View>
        <View>
          <NewTestimonyGroup width="100%"/>
        </View>
      </Layout>
    </>
  );
};

export default Home;
