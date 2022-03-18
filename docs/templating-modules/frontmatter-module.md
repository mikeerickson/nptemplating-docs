---
sidebar_position: 4
---

# FrontMatter Module

## Overview
The FrontMatter Module can be used to work with templates which are in frontmatter format

:::info
#### FrontMatter Helpers
The FrontMatter Module exposes commonly used [helper](/docs/templating-modules/frontmatter-module#helpers) methods
:::

## Methods

The following are the methods available in the FrontMatter Module, and they can be used to process frontmatter formatted templates

:::note
When implementing `NPTemplating.renderTemplate` if template is a valid frontmatter template, they will be rendered automatically without performing any additional frontmatter processing
:::

*****
> #### isFrontmatterTemplate(templateData : string = '')  : boolean
Returns `true | false` if supplied template data is valid frontmatter content

- `templateData` - Template data

- `-> result` - Returns `true | false` if template is frontmatter format

**Examples**

The following example returns the current date, using default values

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const isFrontMatterTemplate = new FrontMatterModule().isFrontMatterTemplate(templateData)
  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****

> #### render(templateData : string = '')  : any
Render frontmatter template object (attributes and body)

- `templateData` - Template data

- `-> result` - Frontmatter template object

**Examples**

The following example returns the current date, using default values

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const renderedData = new FrontMatterModule().render(templateData) // returns frontmatter properties (attributes and body)

		const attrs = renderedData?.attributes || {}
		const body = renderedData?.body || ''

  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****

> #### attributes(templateData : string = '')  : any
Render frontmatter attributes (tags between template tags `---`)

_Note: Also available as [helper](/docs/templating-modules/frontmatter-module#helpers) method_

- `templateData` - Template data

- `-> result` - Frontmatter template attributes

**Examples**

The following example returns the current date, using default values

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const renderedData = new FrontMatterModule().attributes(templateData) // returns frontmatter attributes

  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****

> #### body(templateData : string = '')  : any
Render frontmatter body (below closing frontmatter template block `---`)

_Note: Also available as [helper](/docs/templating-modules/frontmatter-module#helpers) method_

- `templateData` - Template data

- `-> result` - Frontmatter template body

**Examples**

The following example returns the current date, using default values

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const renderedData = new FrontMatterModule().body(templateData) // returns frontmatter body

  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****

### Helpers
FrontMatterModule exposes commonly used methods as importable helpers

- getAttributes
- getBody

```javascript
// import np.Templating Library
import NPTemplating from 'NPTemplating'
import { getAttributes, getBody } from '@templatingModules/FrontMatterModule'

const templateData = {
	const templateData = NPTemplating.getTemplate('My Template')

	const attrs = getAttributes(templateData)
	const body = getBody(templateData)
}
```
