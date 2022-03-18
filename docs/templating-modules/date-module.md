---
sidebar_position: 2
---

# Date Module

## Overview
The Date Module provides methods and variables which work with dates.

:::info
Refer to [Time Module](/docs/templating-modules/time-module) for similar methods which work with with time values)
:::

:::info
#### DateModule Helpers
The DateModule exposes commonly used [helper](/docs/templating-modules/date-module#helpers) methods
:::

:::info
#### Formatting Dates
The Date Module uses JavaScript `moment` library internally, thus you can use any of the [moment formatting](https://momentjs.com/docs/#/parsing/string-format/) options
:::

## Methods
> namespace: `date`

The following are the methods available in the Date Module, and they can be used in any `np.Templating` template, no additional configuration is required.

:::note
`pivotDate` - Many of the Date Module methods accept a `pivotDate` argument, which means the date which will be used to perform the appropriate calculation.  When no `pivotDate` is supplied, the current date will be used.
:::

*****
> #### createDateTime(pivotDate? : string = '')  : date
Creates JavaScript `Date` object based on user supplied `pivotDate`.

This is necessary due to the way NotePlan handles dates. If you are passing a date string to any NotePlan method, you will need to first create a native JavaScript `date` value.

- `pivotDate?` - Date string supplied either from NotePlan directly, or from other Date Module methods. If not supplied, current date will be used

- `-> result` - Returns JavaScript `date` object

*****

> #### now(format? : string = '', offset? : string = '') : string
Returns a string representation current date.

_Note: Also available as [helper](/docs/templating-modules/date-module#helpers) method_

- `format?` - Desired date format. If not supplied, it will use the format in `_configuration` note, using `templates.date.dateStyle`
- `offset?` - Offset can be used to add/subtract `d`, `w`, `m` (use negative number to subtract values)

- `-> result` - Returns formatted date string

**Examples**

The following example returns the current date, using default values

```markdown
<%= date.now() %>
```

The following example returns current date using custom format

```markdown
<%= date.now("dddd Do MMMM YYY") %>
```

*****
> #### format(format : string = '', pivotDate? : string = '') : string
Formats `pivotDate` using supplied `format`

_Note: Also available as [helper](/docs/templating-modules/date-module#helpers) method_

- `format?` - A valid date format string
- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date

- `-> result` - Returns formatted date string

*****

> #### today(format? : string = '') : string
Returns a string representation current date.

- `format?` - Desired date format. If not supplied, it will use the format in `_configuration` note, using `templates.date.dateStyle`

- `-> result` - Returns formatted date string

**Example**

The following example returns the current date, using default values

```markdown
<%= date.today() %>
```

*****

> #### tomorrow(format? : string = '') : string
Returns a string representation of tomorrow

- `format?` - Desired date format. If not supplied, it will use the format in `_configuration` note, using `templates.date.dateStyle`

- `-> result` - Returns formatted date

**Example**

The following example returns tomorrow based on current date

```markdown
<%= date.tomorrow() %>
```

*****

> #### yesterday(format? : string = '') : string
Returns a string representation of yesterday

- `format?` - Desired date format. If not supplied, it will use the format in `_configuration` note, using `templates.date.dateStyle`

- `-> result` - Returns formatted date

**Example**

The following example returns yesterday based on current date

```markdown
<%= date.yesterday() %>
```

*****

> #### weekday(format? : string = '', offset? : number = 1, pivotDate? : string = '') : string
Returns the closest weekday, using the `offset` to add or subtract days

- `format?` - Desired date format. If not supplied, it will use the format in `_configuration` note, using `templates.date.dateStyle`
- `offset?` - Date offset, using `d`, `w`, `m`, or `y`
- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date

- `-> result` - Returns formatted date string

**Example**

The following returns the closest weekday 2 days in advance using current date

```markdown
<%= date.weekday('', 2) %>
```

The following returns the closest weekday 2 days in advance using fixed date

```markdown
<%= date.weekday('', 2, '2021-12-15') %> // returns 2021-12-17
```

*****

> #### weekNumber(pivotDate? : string = '') : number
Returns the week number based on `pivotDate`

- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date

- `-> result` - Returns week number

**Example**

The following returns the closest weekday 2 days in advance using current date

```markdown
<%= date.weekNumber('2021-12-15') %> // the following will return 50
```

*****

> #### dayNumber(pivotDate? : string = '') : number
Returns the day number based on `pivotDate`

Day number will be one of following

- 0 - Sunday
- 1 - Monday
- 2 - Tuesday
- 3 - Wednesday
- 4 - Thursday
- 5 - Friday
- 6 - Saturday

- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date

- `-> result` - Returns day number

**Example**

The following returns the closest weekday 2 days in advance using current date

```markdown
<%= date.dayNumber('2021-12-15') %> // the following will return 3
```

*****

> #### isWeekday(pivotDate? : string = '') : boolean
Returns true if `pivotDate` is on weekday

- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date

- `-> result` - Returns true or false

**Example**

The following returns true or false if `pivotDate` is weekday

```markdown
<%= date.isWeekday('2021-12-15') %> // the following will return true
```

*****

> #### isWeekend(pivotDate? : string = '') : boolean
Returns true if `pivotDate` is on weekend

- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date
- `-> result` - Returns true or false

**Example**

The following returns true or false if `pivotDate` is weekend

```markdown
<%= date.isWeekend('2021-12-15') %> // the following will return false
```

*****

> #### weekOf(pivotDate? : string = '') : string
Returns formatted weekOf based on `pivotDate`

- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date

- `-> result` Returns formatted weekOf using following syntax `Wnn (YYYY-MM-DD..YYYY-MM-DD)`

**Example**

The following returns weekOf value based on `pivotDate`

```markdown
<%= date.weekOf('2021-12-01') %> // the following will W48 (2021-11-28..2021-12-03)
```

*****

> #### businessAdd(numDays : number = 1, pivotDate? : string = '', format? : string = '') : string
Adds `numDays` business days.  You can also supply `pivotDate` and date `format`

- `numDays` - Number of days to add (default: 1)
- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date
- `format?` - Optional format string

- `-> result` Returns formatted date string

**Example**

The following adds 3 business days, using current date

```markdown
<%= date.businessAdd(3, '2022-01-07') %> // returns 2022-01-12
```

*****

> #### businessSubtract(numDays : number = 1, pivotDate? : string = '', format? : string = '') : string
Subtracts `numDays` business days.  You can also supply `pivotDate` and date `format`

- `numDays` - Number of days to add (default: 1)
- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date
- `format?` - Optional format string

- `-> result` Returns formatted date string

**Example**

The following subtracts 3 business days, using current date

```markdown
<%= date.nextBusinessSubtract(3, '2022-01-12') %> // returns 2022-01-07
```

*****

> #### nextBusinessDay(pivotDate? : string = '', format? : string = '') : string
Returns next business day, based on `pivotDate`.  You can also supply date `format`

- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date
- `format?` - Optional format string

- `-> result` Returns formatted date string

**Example**

The following returns next business day based on `pivotDate`

```markdown
<%= date.nextBusinessDay('2022-01-12') %> // returns 2022-01-13
```

*****

> #### previousBusinessDay(pivotDate? : string = '', format? : string = '') : string
Returns previous business day, based on `pivotDate`.  You can also supply date `format`

- `pivotDate?` - Desired date to obtain week number. If not supplied, it will use current date
- `format?` - Optional format string

- `-> result` Returns formatted date string

**Example**

The following returns previous business day based on `pivotDate`

```markdown
<%= date.previousBusinessDay('2022-01-10') %> // returns 2022-01-07
```

*****

## Using DateModule in NotePlan Plugins
In addition to using the Date Module methods in templates, you can also use within your custom NotePlan plugins.

### Date Module Methods
The following examples demonstrates how you can use some of the Date Module methods

#### Using `DateModule.previousBusinessDay` method

```javascript
// import DateModule from @templatingModules
import DateModule from '@templatingModules/DateModule'

export async testPreviousBusinessDay() : Promise<string> {
	// The following example executes the `previousBusinessDay` method
	return new DateModule().previousBusinessDay()
}
```

#### Using `DateModule.isWeekend` method

```javascript
export async testNextBusinessDay() : Promise<string> {
	// in addition to use the static class method, you could also create a `dateInstance` variable
	const dateInstance = new DateModule()

	// get the current date using supplied format
	const currentDate = moment(new Date()).format('YYYY-MM-DD h:mm A')

  // check if `currentDate` is weekend
	const isWeekend = dateInstance.isWeekend(currentDate)
  if (isWeekend) {
		return 'Perform special handling if current day is on weekend'
	}

	return ''
}
```

### Helpers
DateModule exposes commonly used methods as importable helpers

- format
- now

```javascript
// import np.Templating Library
import NPTemplating from 'NPTemplating'
import DateModule from '@templatingModules/DateModule'
import { now, format } from '@templatingModules/DateModule'

const templateData = {
	data: {
		testDate: new DateModule().now(), // returns current date using .now module method
		myDate: now(), // returns current date, using default format YYYY-MM-DD
		myDateFormatted: format('YYYY MM DD','2022-03-18') // returns 2022 03 18
	}

	const renderedData = NPTemplating.renderTemplate('My Template', data)
}
```
