import { type AppType } from "next/dist/shared/lib/utils";
// import '../styles/reset.css';
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "../styles/globals.css";
import '@aws-amplify/ui-react/styles.css';
import studioTheme from "../ui-components/studioTheme.js";
import { Amplify } from "aws-amplify";
import awsconfig from '../aws-exports';
import '@fontsource/inter';

Amplify.configure(awsconfig);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Component height="100%" {...pageProps} />
    </AmplifyProvider>
  );
};

export default MyApp;
