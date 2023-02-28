import { authentication } from "@microsoft/teams-js";

export const authenticate = authentication.authenticate({
  url: "https://3p.app.server/auth?oauthRedirectMethod={oauthRedirectMethod}&authId={authId}",
  isExternal: true,
  successCallback: function (result) {
    //sucess
  },
  failureCallback: function (reason) {
    //failure
  },
});
