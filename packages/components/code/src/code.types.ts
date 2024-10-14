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
  color: string;
  showRaw: boolean;
  showCopy: boolean;
  showTrafficLight: boolean;
  logo: React.ReactNode;
  isColored: boolean;
  children?: React.ReactDOM
}

export interface CodeFile {
  name: string;
  code: string;
  icon?: React.ReactNode;
}