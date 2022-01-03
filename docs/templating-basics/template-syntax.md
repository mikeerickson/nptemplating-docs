---
sidebar_position: 8
---

# Syntax
`np.Templating` templating engine uses standard JavaScript syntax to delcare a command. It may take some time to get used to the syntax, but after you have worked with for awhile, you will get the hang of it.

All `np.Templating` variables and methods are JavaScript objects which are invoked using a command.

:::info
For more information on `np.Templating` tags. Visit [`Templating - Definitions -> Template Tags`](/docs/templating-basics/template-tags)
:::

## Command Syntax
A command **must** have both an opening tag `<%` and closing `%>`, and if you want to show the results when template rendered, the opening tag will be `<%=` or `<%-` (unescaped output)

## Variable/Method Syntax

### Objects hierarchy
All of `np.Templating`s variable and methods, whether it's an internal or custom method, will use a namespace. To access the variable or method of an object, you ues a dot `.` (e.g. `<%= date.now() %>`)

If you are using [prompt interface](/docs/templating-examples/prompt), if you are not immediately displaying prompt result, you should use the `user` namespace, which tells `np.Templating` this is a user variable.

### Object Invocation
The syntax between a variable and method invocation is different, so it's important to understand the differences.

For example, `np.firstName` is an internal variable, whereas  `np.date.now()` is a method (method is followed by opening and closing parenthesis)

More information about the different internal variables/methods is supplied in [Templating - Modules](/docs/templating-modules/overview) section.

#### Variable Invocation
To invoke a variable, you reference the desired module followed by variable name

:::info
 `<%= date.DAY_NUMBER_SUNDAY %>`
:::

#### Method invocation
To invoke a method, you reference the desired module, followed by the method name with opening and closing parenthesis.

:::info
For example, if you want to get the current date of from the `date` module you would use `date.now()`
:::

A method may contain one or more arguments, which are placed between the opening and closing parenthesis

```js
date.now(ar1, arg2, ...)
```

All arguments must be passed in the correct order, and will be defined by the internal module or custom module (reference appropriate module documentation for paramenter definition)

There are 5 different types of parameters:

- A `string` type means the value must be placed with single or double quotes (`'value' or "value"`)
- A `number` type means the value must be an `integer` or `decimal` value (`15, -22, 15.15, ...`)
- A `boolean` type means the value must be either `true` or `false` (all lowercase)
- An `array` type means the value must start with `[` and end with `]` (`['mike','erickson']`)
- An `object` type means the value must start with `{` and end with `}` (`{first: 'Mike', last: 'Erickson'}`)

_Note: The value types are important and must match expected value, otherwise an error will be emitted_

#### Method Syntax
`np.Templating` syntax for all methods uses a common "signature" syntax, which makes it easier to determine what the arguments expect.

- `arg` represents a symbolic name for the argument, which the method will use internally
- `type` represents the expected type for the argument (`string`, `number`, etc)

If an argument is optional, it will be appended with a question mark `?` (e.g. `name?: string`)

If an argument has a default value, it will be specified using an equal sign `=` (e.g. `name: string = 'Mike'`)

If an argument supports multiple types, it will be delimited with a pipe `|` (e.g. `age: string|number`)

**Example:**

Let's use the `DateModule` `businessAdd` method, which has a signature of:

```javascript
date.businessAdd(numDays?: integer = 1, pivotDate?:string = '', format?: string = '')
```

You could then use this method in your template like

```javascript
<%= date.businessAdd() %>  // would return next business day using default `numDays` and `pivotDate`

<%= date.businessAdd(1) %>  // would return next business day using `pivotDate`

<%= date.businessAdd(1,'2021-12-22') %> // would return next business day using supplied `pivotDate`

<%= date.businessAdd(1,'','MM/DD/YYYY')> // would return next business day, using a custom format
```
