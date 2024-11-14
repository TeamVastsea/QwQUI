import { ReactNode } from "react";

export interface DefaultPropType {
  w: number;
  h: number;
  className: string;
  children: ReactNode;
}

export type PropsType<T = unknown> = T & DefaultPropType
export type PropsTypeOptional<T = unknown> = Partial<T & DefaultPropType>