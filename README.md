
## Documentation

This library implements an auth context provider by making use of the
`oidc-client-ts` library. Its configuration is tight coupled to that library.

- [oidc-client-ts](https://github.com/authts/oidc-client-ts)

The
[`User`](https://authts.github.io/oidc-client-ts/classes/User.html)
and
[`UserManager`](https://authts.github.io/oidc-client-ts/classes/UserManager.html)
is hold in this context, which is accessible from the
React application. Additionally it intercepts the auth redirects by looking at
the query/fragment parameters and acts accordingly. You still need to setup a
redirect uri, which must point to your application, but you do not need to
create that route.

To renew the access token, the
[automatic silent renew](https://authts.github.io/oidc-client-ts/interfaces/UserManagerSettings.html#automaticSilentRenew)
feature of `oidc-client-ts` can be used.

