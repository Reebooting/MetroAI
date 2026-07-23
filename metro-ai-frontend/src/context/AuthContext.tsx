import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface AuthUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "USER" | "ADMIN";
}

interface AuthContextType {
    token: string | null;
    user: AuthUser | null;
    isAuthenticated: boolean;

    login: (token: string, user: AuthUser) => void;

    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {

    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );

    const [user, setUser] = useState<AuthUser | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (jwt: string, userData: AuthUser) => {

        localStorage.setItem("token", jwt);
        localStorage.setItem("user", JSON.stringify(userData));

        setToken(jwt);
        setUser(userData);
    };

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{token,user,
                isAuthenticated: !!token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}