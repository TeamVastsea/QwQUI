# 贡献指南


## 行为准则

<!-- TODO -->

## 开发

请 fork [QwQUi](https://github.com/TeamVastsea/QwQUI)

```bash
git clone https://github.com/<YourGithubName>/QwQUI
git remote add upstream https://github.com/TeamVastsea/QwQUI
pnpm i 
```

### 创建组件

在输入下列命令后输入您的组件名，例如`dropZone`

```bash
pnpm run create:comp
```

### 目录结构

```
internal
packages
  build
  components
    <component-name>
      src
        <component-name(kebab-case)>.tsx    // 组件主题
      index.ts                              // 组件入口
  theme
```

我们强烈建议您将样式文件些写在`components\<component-name>\src`下

### 引用子包

假设现在存在两个子包`@qwqui/unstyle-btn`与`@qwqui/button`。并且我们假设`@qwqui/button`使用了`@qwqui/unstyle-btn`这个子包。

1. 执行 `pnpm add @qwqui/unstyle-btn --workspace --filter=@qwqui/button`
2. 在`@qwqui/button`中使用

这样在后续打包的过程中`pnpm`会自行拓补排序。即先执行`@qwqui/unstyle-btn`的`build`命令，而后执行`@qwqui/button`的`build`命令