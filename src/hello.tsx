import React from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

// Pass the flags prop and return an element based on the state of the feature flag key
const HelloWorld = () => {
  const {newText} = useFlags()
  console.log('flags: ', newText);
  return newText ? <div>Flag on</div> : <div>Flag off</div>;
};

export default (HelloWorld);
