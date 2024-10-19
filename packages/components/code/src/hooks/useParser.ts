import { BundledHighlighterOptions, BundledLanguage, BundledTheme, createHighlighter, HighlighterGeneric } from "shiki/index.mjs";
import { CodeFileProps } from "../code.types";
import { useMemo, useState } from "react";
import { CodeContextType } from "../code-context";

export const useHighligther = async (
  hightlighterOptions: BundledHighlighterOptions<BundledLanguage, BundledTheme>,
  theme: Record<string, string>[],
) => {
  return createHighlighter(hightlighterOptions)
  .then(async (hl) => {
    await hl.loadTheme(...theme as unknown as Record<string,string>[]);
    return hl;
  })
}
let globalHl: HighlighterGeneric<BundledLanguage, BundledTheme>;
export const useHighlightCode = (
  codefile:CodeFileProps,
  cache: Record<string,string>,
  setCache: CodeContextType['setCache'],
  hightlighterOptions: BundledHighlighterOptions<BundledLanguage, BundledTheme>,
  theme: Record<string, string>[],
) => {
  const [html, setHTML] = useState('');
  const [loading, setLoading] = useState(true);
  const hl = useHighligther(hightlighterOptions, theme)
  useMemo(()=>{
    if (!codefile){
      return;
    }
    setLoading(true);
    if (cache[codefile.name]) {
      setHTML(cache[codefile.name]);
      setLoading(false)
      return;
    }
    hl.then(hl=>{
      if (!globalHl) {
        globalHl = hl;
      }
      return globalHl;
    })
    .then((hl) => {
      const html = hl.codeToHtml(codefile.code, {
        lang: codefile.language,
        theme: 'dark-theme',
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
  }, [codefile]);
  return {html,setHTML,loading,setLoading}
}