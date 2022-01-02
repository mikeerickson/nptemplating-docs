---
sidebar_position: 1
---

# Overview
`np.Templating` provides support for custom plugins which can be used in any template

## Plugin Format

```js

module.exports = {
  pluginVariable: 'lorem...',

  async method1(): Promise<string> {
		return 'method1 return value'
	},

  async method2(): Promise<string> {
		return 'method2 return value'
	},

}
```
