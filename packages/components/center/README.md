# @qwqui/center

The `Center` component provides a flexible way to center its children either in a block or inline context.

## Install

```bash
pnpm add @qwqui/center
```

## Usage

```typescript
import React from 'react';
import { Center } from '@qwqui/center';

const Example = () => (
  <Center inline>
    <span>Your content here</span>
  </Center>
);
```

## Props

| Name | Type | Description |
|---|---|---|
| children | `React.ReactNode` | The content to be centered. |
| inline | `boolen` | If true, applies `inline-flex` display type; otherwise, applies `flex`. Defaults to `false`. |

## License

- MIT
