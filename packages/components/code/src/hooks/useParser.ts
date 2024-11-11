import { BundledHighlighterOptions, BundledLanguage, BundledTheme, createHighlighter, HighlighterGeneric, ShikiTransformer } from "shiki/index.mjs";
import { CodeFileProps } from "../code.types";
import { useMemo, useState } from "react";
import { CodeContextType } from "../code-context";
import {lineNumberTransformer} from './transformer';

let hlCache:HighlighterGeneric<BundledLanguage, BundledTheme> | null = null;

export const useHighligther = async (
  hightlighterOptions: BundledHighlighterOptions<BundledLanguage, BundledTheme>,
  theme: Record<string, string>[],
) => {
  if(hlCache){
    return hlCache;
  }
  return createHighlighter(hightlighterOptions)
  .then(async (hl) => {
    await hl.loadTheme(...theme as unknown as Record<string,string>[]);
    hlCache = hl;
    return hlCache;
  })
  .then((hl) => hl)
}
export const useHighlightCode = (
  codefile:CodeFileProps,
  cache: Record<string,string>,
  setCache: CodeContextType['setCache'],
  hightlighterOptions: BundledHighlighterOptions<BundledLanguage, BundledTheme>,
  theme: Record<string, string>[],
  showRow: boolean,
  colored: boolean
) => {
  const [html, setHTML] = useState('');
  const [loading, setLoading] = useState(true);
  const transformers:ShikiTransformer[] = [];
  const hl = useHighligther(hightlighterOptions, theme)
  useMemo(()=>{
    if (!codefile){
      return;
    }
    if (showRow) {
      if (!transformers.some(transformer => transformer.name === '@qwqui/code/line-number-transformer')){
        transformers.push(lineNumberTransformer())
      }
    }
    setLoading(true);
    if (cache[codefile.name]) {
      setHTML(cache[codefile.name]);
      setLoading(false)
      return;
    }
    hl
    .then((hl) => {
      const html = hl.codeToHtml(codefile.code, {
        lang: codefile.language,
        theme: colored ? 'dark-theme' : 'noColor',
        transformers,
      })
      
      return html
    })
    .then((html)=>{
      setHTML(html);
      setCache({
        ...cache,
        [codefile.name]: html
      })
      setLoading(false)
    })
  }, [codefile, showRow]);
  return {html,setHTML,loading,setLoading}
}