import React from "react";

/**
 <div class="code">
  <div class="code__header">...</div>
  <div class="code__container">
    <pre>
      <code></code>
    </pre>
    <pre>
      <code></code>
    </pre>
    ...
  </div>
 </div>
 */
export interface CodeWrapper {
  color?: string;
  showRow?: boolean;
  showCopy?: boolean;
  showTrafficLight?: boolean;
  logo?: React.ReactNode;
  isColored?: boolean;
  children?: React.ReactNode
}

export interface CodeFileProps {
  name: string;
  code: string;
  icon?: React.ReactNode;
  language: string;
}

export interface CodeHeaderProps {
  items: {
    name: string;
    icon?: React.ReactNode
  }[]
}