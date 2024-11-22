import { createContext } from "react";
import { ConfigProviderProps } from "./config-provider.type";

export const ConfigContext = createContext<Partial<ConfigProviderProps>>({});

export const {Consumer} = ConfigContext;