---
sidebar_position: 6
---

# Utility Module

## Overview
The Utility Module provides a suite of utility methods which can be used in your templates

## Methods
> namespace: `utility`

The following are the methods available in the Utility Module, and they can be used in any `np.Templating` template, no additional configuration.

*****

### format
> #### format(formatter : string, param1?: mixed, param2?: mixed, ...)
Formats parameters using `formatter` string. Format string accesses each subsequent parameter via numbered offset.

- `formatter` - Format string

Each format position access positional parameter (one based) starting with `%`, followed by `$` then format type (`s` = string, `n` = number, `d` = decimal)

- `param1` .. `param2` ...

#### Formatter Specification
The placeholders in the format string are marked by % and are followed by one or more of these elements, in this order:

- An optional number followed by a $ sign that selects which argument index to use for the value. If not specified, arguments will be placed in the same order as the placeholders in the input string.
- An optional + sign that forces to precede the result with a plus or minus sign on numeric values. By default, only the - sign is used on negative numbers.
- An optional padding specifier that says what character to use for padding (if specified). Possible values are 0 or any other character preceded by a ' (single quote). The default is to pad with spaces.
- An optional - sign, that causes `formatter` to left-align the result of this placeholder. The default is to right-align the result.
- An optional number, that says how many characters the result should have. If the value to be returned is shorter than this number, the result will be padded. When used with the j (JSON) type specifier, the padding length specifies the tab size used for indentation.
- An optional precision modifier, consisting of a . (dot) followed by a number, that says how many digits should be displayed for floating point numbers. When used with the g type specifier, it specifies the number of significant digits. When used on a string, it causes the result to be truncated.
- A type specifier that can be any of:
    - % — yields a literal % character
    - b — yields an integer as a binary number
    - c — yields an integer as the character with that ASCII value
    - d or i — yields an integer as a signed decimal number
    - e — yields a float using scientific notation
    - u — yields an integer as an unsigned decimal number
    - f — yields a float as is; see notes on precision above
    - g — yields a float as is; see notes on precision above
    - o — yields an integer as an octal number
    - s — yields a string as is
    - t — yields true or false
    - T — yields the type of the argument1
    - v — yields the primitive value of the specified argument
    - x — yields an integer as a hexadecimal number (lower-case)
    - X — yields an integer as a hexadecimal number (upper-case)
    - j — yields a JavaScript object or array as a JSON encoded string

#### Argument swapping
You can also swap the arguments. That is, the order of the placeholders doesn't have to match the order of the arguments. You can do that by simply indicating in the format string which arguments the placeholders refer to:

```javascript
<%- utility.format('%2$s %3$s a %1$s', 'cracker', 'Polly', 'wants') %>
```

And, you can repeat the placeholders without having to increase the number of arguments.

#### Named arguments
Format strings may contain replacement fields rather than positional placeholders. Instead of referring to a certain argument, you can now refer to a certain key within an object. Replacement fields are surrounded by rounded parentheses - ( and ) - and begin with a keyword that refers to a key:

```javascript
<%- utility.format('Hello %(name)s', 'Mike') %>
// Hello Mike
```

Keywords in replacement fields can be optionally followed by any number of keywords or indexes:

**Examples:**

The following example will format string using parameter position (parameter access is 1 based)

```markdown
<%- utility..format('%2$s %3$s a %1$s', 'cracker', 'Polly', 'wants')
// returns Polly wants a cracker
```

*****

### concat
> #### concat(param1: string, param2: string, ...) : string
Concatenates all parameters into single string (you can supply unlimited parameters)

**Example:**

The following example will concatenate each parameter into a single string

```javascript
<%- utility.concat(`${user.first}`, '          ', `${user.last}`) %>
// concatenates first and last values from np.Templating settings
```

*****

### lowercase
> #### lowercase(param: string) -> result : string
Converts `param` to lowercase

**Example:**

The following example converts string to lowercase

```javascript
<%- utility.lowercase('HELLO WORLD') %>
// returns hello world
```

*****

### uppercase
> #### uppercase(param: string) -> result : string
Converts `param` to uppercase

**Example:**

The following example converts string to uppercase

```javascript
<%- utility.uppercase('hello world') %>
// returns HELLO WORLD
```

*****

### titleCase
> #### titleCase(param: string) -> result : string
Converts `param` to title case

**Example:**

The following example converts string to title case

```javascript
<%- utility.titleCase('hello world') %>
// returns Hello World
```

*****

### camelize
> #### camelize(param: string) -> result : string
Converts `param` to camel case

**Example:**

The following example converts string to camel case

```javascript
<%- utility.camelize('hello world in template') %>
// returns helloWorldInTemplate
```

*****

### slug
> #### slug(param: string) -> result : string
Converts `param` to slug case, spaces are converted to `-` and all lowercase

**Examples:**

The following examples converts string to slug case

```javascript
<%- utility.camelize('hello world in template') %>
// returns hello-world-in-template

<%- utility.camelize('Hello World In Template') %>
// returns hello-world-in-template
```
