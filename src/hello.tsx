import React from "react";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

// Pass the flags prop and return an element based on the state of the feature flag key
const HelloWorld = ({ flags }: any) => {
  console.log('flags: ', flags);
  return flags.testFeature ? <div>Flag on</div> : <div>Flag off</div>;
};

export default withLDConsumer()(HelloWorld);
