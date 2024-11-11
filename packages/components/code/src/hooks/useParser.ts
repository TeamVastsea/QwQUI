import { BundledHighlighterOptions, BundledLanguage, BundledTheme, createHighlighter, HighlighterGeneric, ShikiTransformer } from "shiki/index.mjs";
import { CodeFileProps } from "../code.types";
import { useMemo, useState } from "react";
import {lineNumberTransformer} from './transformer';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'

let hlCache:HighlighterGeneric<BundledLanguage, BundledTheme> | null = null;
export const useHighlightCode = (
  codefile:CodeFileProps,
  hightlighterOptions: BundledHighlighterOptions<BundledLanguage, BundledTheme>,
  theme: Record<string, string>[],
  showRow: boolean,
  colored: boolean,
  mode: 'dark' | 'light'
) => {
  const [nodes, setNodes] = useState(null);
  const [loading, setLoading] = useState(true);
  const transformers:ShikiTransformer[] = [];
  useMemo(async ()=>{
    if (!codefile){
      return;
    }
    if (showRow) {
      if (!transformers.some(transformer => transformer.name === '@qwqui/code/line-number-transformer')){
        transformers.push(lineNumberTransformer())
      }
    }
    setLoading(true);
    if (!hlCache){
      const hl = await createHighlighter(hightlighterOptions)
      await hl.loadTheme(...theme);
      hlCache = hl;
    }
    const hl = hlCache;
    const nodes = hl.codeToHast(codefile.code, {
      lang: !colored ? 'text' : codefile.language,
      theme: `${mode}-theme`,
      transformers,
    })
    setNodes(
      toJsxRuntime(
        nodes,
        {Fragment,jsx,jsxs}
      )
    );
    setLoading(false);
  }, [codefile, showRow]);
  return {nodes,setNodes,loading,setLoading}
}