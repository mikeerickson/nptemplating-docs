---
sidebar_position: 3
---

# Time Module

## Overview
The Time Module provides methods and variables which work with dates.

:::info
Refer to [Date Module](/docs/templating-modules/date-module) for similar methods which work with with date values
:::

## Methods
> namespace: `time`

The following are the methods available in the Time Module, and they can be used in any `np.Templating` template, no additional configuration required.

*****
### now
> #### now(format? : string = '') : string
Returns a string representation current time.

- `format?` - Desired time format. If not supplied, it will use the **Time Format** value in `np.Templating` [Plugin Settings](/docs/settings)

- `-> result` - Returns formatted time string

**Examples**

The following example returns the current time, using default values

```markdown
<%= time.now() %>
```

The following example returns current time using custom format

```markdown
<%= time.now("h:mm") %>
```

*****
### currentTime
> #### currentTime(format? : string = '') : string
Returns a string representation current time.

- `format?` - Desired time format. If not supplied, it will use the **Time Format** in `np.Templating` [Plugin Settings](/docs/settings)

- `-> result` - Returns formatted time string

**Examples**

The following example returns the current time, using default values

```markdown
<%= time.currentTime() %>
```

The following example returns current time using custom format

```markdown
<%= time.currentTime("h:mm") %>
```

The following example uses the `currentTime` helper

```markdown
<%= currentTime() %>
```

*****
### format
> #### format(format : string = '', pivotDate? : string = '') : string
Formats `pivotDate` using supplied `format`.

_Note: Also available as [helper](/docs/templating-modules/time-module#helpers) method_

- `format?` - A valid time format string
- `pivotDate?` - Desired date to format. If not supplied, it will use current date.

- `-> result` - Returns formatted time string

:::tip
Refer to [moment.js format](https://momentjs.com/docs/#/parsing/string-format/) for available formatting options
:::

*****
### convertTime12to24
> #### convertTime12to24(time12hr: string = '')
Convert 12-hour time to 24-hour time

## Helpers
TimeModule exposes commonly used methods as importable helpers

> #### time
Returns current time

```javascript
// import np.Templating Library
import NPTemplating from 'NPTemplating'
import DateModule from '@templatingModules/TimeModule'
import { time } from '@templatingModules/TimeModule'

const templateData = {
	data: {
		testTime: new TimeModule().now(), // returns current date using .now module method
		myTime: time(), // returns current time, using default format h:mm A
	}

	const renderedData = NPTemplating.renderTemplate('My Template', data)
}
```
