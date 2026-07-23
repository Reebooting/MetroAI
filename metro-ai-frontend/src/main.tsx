import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";
import {
    QueryClientProvider,
} from "@tanstack/react-query";

import {
    BrowserRouter,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import "./styles/theme.css";

import App from "./App";


import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import { queryClient } from "./lib/queryClient";


ReactDOM.createRoot(document.getElementById("root")!
).render(

<React.StrictMode>

<QueryClientProvider client={queryClient}>

<BrowserRouter>

<AuthProvider>

<App />

<Toaster position="top-right"/>

</AuthProvider>

</BrowserRouter>

</QueryClientProvider>

</React.StrictMode>

);