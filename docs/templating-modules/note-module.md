---
sidebar_position: 5
---

# Note Module

## Overview
The Note Module provides a suite of methods which provide access to the current note (calendar or project note). If there is no current note, each method will return an empty value

## Methods
> namespace: `note`

The following are the methods available in the Note Module, and they can be used in any `np.Templating` template, no additional configuration.

*****

### filename
> #### filename() : string
Returns the current note filename as it appears on disk. This may be different than the note title. You an use the `note.title` method if you wish to access the actual note title.

**Examples:**

The following example will return the filename for the current calendar note.

Assuming the current note is May 29, 2022, the value returned will be `20220529.md`

```javascript
<%- note.filename() %> // returns 20220529.md
```

The following example will return the filename for the current project note

Assuming the current note has a title of "# Todo List" located in the "Projects", the value returned will be `Projects/Todo List.md`

```javascript
<%- note.filename() %> // returns Projects/Todo List.md
```

*****

### title
> #### title() : string
Returns the title of the current note, which may be either a calendar or project note.

- If the current note is a calendar note, the value will be a date string in YYYY-MM-DD format
- If the current note is a project note, the value will be the first line

-> `title` - Returns note title

**Examples:**

The following will return the note title.

Assuming the current note is May 29, 2022, the value returned will be `2022-05-29`

```javascript
<%- note.title() %> // returns 2022-05-29
```

The following example will return the filename for the current project note

Assuming the current note has a title of "# Todo List" the value returned will be `Todo List`

```javascript
<%- note.title() %> // returns Todo List
```

*****

### date
> #### date(format: ?string = '') : date
Returns the date value of a calendar note.  If the current note is a project note, an empty string will be returned

- `format` - Optional date format

-> `date` - Returns date string of calendar note

**Examples:**

The following will return the note date (calendar note only).

Assuming the current note is May 29, 2022, the value returned will be `Sun May 29 2022 00:00:00 GMT-0700 (PDT)`

```javascript
<%- note.date() %> // Sun May 29 2022 00:00:00 GMT-0700 (PDT)*
```

The following will return the note date (calendar note only).

Assuming the current note is May 29, 2022, the value returned will be `2022-05-29`

```javascript
<%- note.date('YYYY-MM-DD') %> // returns 2022-05-29
```

*****

### createdDate
> #### createdDate(format: ?string = '') : date
Returns the created date value of the current note

- `format` - Optional date format

-> `date` - Returns created date string of current note

**Examples:**

The following will return the note created date.

```javascript
<%- note.createdDate() %> // Sun May 29 2022 00:00:00 GMT-0700 (PDT)*
```

The following will return the created date using supplied format.

```javascript
<%- note.createdDate('YYYY-MM-DD') %> // returns 2022-05-29
```

*****

### changedDate
> #### changedDate(format: ?string = '') : date
Returns the changed date value of the current note

- `format` - Optional date format

-> `date` - Returns changed date string of current note

**Examples:**

The following will return the note changed date.

```javascript
<%- note.changedDate() %> // Sun May 29 2022 00:00:00 GMT-0700 (PDT)*
```

The following will return the changed date using supplied format.

```javascript
<%- note.changedDate('YYYY-MM-DD') %> // returns 2022-05-29
```

*****

### hashtags
> #### hashtags() : string
Returns comma separated list of hashtags located in current note

-> `hashtags` - Returns list of all hashtags in current note

**Example:**

The following will comma separated list of hashtags

```javascript
<%- note.hashtags() %> // #tag1, #tag2, ...
```

*****

### mentions
> #### mentions() : string
Returns comma separated list of mentions located in current note

-> `mentions` - Returns list of all mentions in current note

**Example:**

The following will comma separated list of mentions

```javascript
<%- note.mentions() %> // #tag1, #tag2, ...
```
