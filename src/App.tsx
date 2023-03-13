import React from "react";

import { withLDProvider } from "launchdarkly-react-client-sdk";

import HelloWorld from "./hello";

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default withLDProvider({
  clientSideID: "640e1ba717388313583d63db",
  context: {
    kind: "user",
    key: "example_user",
    name: "Example user",
    email: "User@example.com",
  },
})(App);
