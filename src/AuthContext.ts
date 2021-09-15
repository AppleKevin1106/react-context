import React from "react";
import type {
    UserManagerSettings, User, SessionStatus,
    SigninPopupArgs, SigninSilentArgs, SigninRedirectArgs,
    SignoutRedirectArgs, SignoutPopupArgs, QuerySessionStatusArgs } from "oidc-client-ts";

import type { AuthState } from "./AuthState";

/**
 * @public
 */
export interface AuthContextProps extends AuthState {
    /**
     * UserManager functions. See [UserManager](https://github.com/authts/oidc-client-ts) for more details.
     */
    readonly settings: UserManagerSettings;
    clearStaleState(): Promise<void>;
    removeUser(): Promise<void>;
    signinPopup(args?: SigninPopupArgs): Promise<User>;
    signinSilent(args?: SigninSilentArgs): Promise<User | null>;
    signinRedirect(args?: SigninRedirectArgs): Promise<void>;
    signoutRedirect(args?: SignoutRedirectArgs): Promise<void>;
    signoutPopup(args?: SignoutPopupArgs): Promise<void>;
    querySessionStatus(args?: QuerySessionStatusArgs): Promise<SessionStatus | null>;
    revokeAccessToken(): Promise<void>;
    startSilentRenew(): void;
    stopSilentRenew(): void;
}

/**
 * @public
 */
export const AuthContext = React.createContext<AuthContextProps>(undefined as any);
AuthContext.displayName = "AuthContext";
