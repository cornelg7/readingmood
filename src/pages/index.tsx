import { type NextPage } from "next";
import { View } from "@aws-amplify/ui-react";
import {
  NewHero,
  NewMarketingPricing,
  NewPersuade,
  NewTestimonyGroup
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
          <NewHero
            paddingBottom="100px"
            mainEventHandler={() => handleSignUp()} secondaryEventHandler={async () => {await router.push('/demo')}}
            overrides={{
              'NewHero': {width: '100%'},
              'Frame 28': {width: {base: '90%', medium: '70%'}, marginBottom: {base: '30px', medium: '10px'}, marginLeft: 'auto', marginRight: 'auto'},
              'Want to listen to music while reading?': {width: '100%', marginBottom: {base: '20px', medium: '10px'}, fontSize: {base: '46px', medium: '48px'}},
              'We recommend songs that match the vibe of your book!': {width: '100%', lineHeight: '36px', marginBottom: {base: '20px', medium: '0'}},
              'Simply enter the book title and let our app recommend songs that perfectly capture the mood and atmosphere of your favorite reads. Elevate your reading game and lose yourself in the story with readingmood.': {width: '100%'},
              'Frame 5589': {wrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', width: {base: '90%', medium: '70%'}},
              'Button36513206': {marginLeft: 'auto'},
            }}
          />
        </View>
        <View>
          <NewPersuade
            width="100%" src="/read-and-listen-banner.png" handleClick={() => handleSignUp()}
            overrides={{
              'NewPersuade': { height: 'unset' },
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
