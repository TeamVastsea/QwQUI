import { createContext } from "react";
import { CodeFile } from "./code.types";

export const CodeContext = createContext<{codeFiles:CodeFile[]}>({
  codeFiles: []
});