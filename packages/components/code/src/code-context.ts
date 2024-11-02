import { createContext } from "react";
import { CodeFileProps } from "./code.types";

export const CodeContext = createContext(null);
export type CodeContextType = {
  codeFiles: CodeFileProps[];
  setCodeFiles: React.Dispatch<React.SetStateAction<CodeFileProps[]>>;
  activeCode: string;
  setActiveCode: React.Dispatch<React.SetStateAction<string>>;
  x: number;
  setX: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  prevX: number;
  setPrevX: React.Dispatch<React.SetStateAction<number>>;
  prevWidth: number;
  setPrevWidth: React.Dispatch<React.SetStateAction<number>>;
  cache: Record<string, string>;
  setCache: React.Dispatch<React.SetStateAction<Record<string,string>>>;
  init: boolean;
}