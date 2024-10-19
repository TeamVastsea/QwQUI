import { ShikiTransformer } from "shiki/types.mjs"

export const lineNumberTransformer = ():ShikiTransformer => {
  return {
    name: '@qwqui/code/line-number-transformer',
    code(hast) {
      const children = hast.children;
      let count = 0;
      for (const line of children){
        if (line.type !== 'element'){
          continue
        }
        count += 1
        line.children.unshift({
          type: 'element',
          tagName: 'span',
          children:[
            {
              type: 'text',
              value: count.toString()
            }
          ],
          properties: {
            class: 'line-number',
            style: 'width: var(--line-number-width)',
          }
        })
      }
      return hast;
    }
  }
}