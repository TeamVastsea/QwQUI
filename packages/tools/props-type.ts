import { CSSProperties, ReactNode } from "react";

export type DefaultPropType = {
  w: number;
  h: number;
  className: string;
  style: CSSProperties;
  children: ReactNode;
} & {}

export type PropsType<T = unknown> = T & DefaultPropType
export type PropsTypeOptional<T = unknown> = Partial<T & DefaultPropType>