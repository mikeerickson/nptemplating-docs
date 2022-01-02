---
sidebar_position: 3
---

# Configuration
The first time you invoke any of the `np.Templating` commands, a new section in the NotePlan `_configuration` note will be created, adding a number of areas where you can customize the operation of further template modules methods.

### Manually Initializing Configuration
In addition, you can also execute the `np:init` command which will perform the same actions as is done on any of internal commands.

### Example default configuration

#### Default template configuration values
- `templates.local` - Will use system default locale if not defined, will copy existing `date.locale` if exists
- `defaultFormats.date` - Will use `YYYY-MM-DD` format, will copy existing `date.dateStyle` value if exists
- `defaultFormats.time` - Will use `h:mm A` format, will copy existing `date.timeStyle` value if exists
- `user.first` - Will use `github.username` value, will copy existing `tagValue.me.firstName` value if exists
- `user.last` - Will use `github.username` value, will copy existing `tagValue.me.lastName` value if exists

```json
...
    templates: {
      // check https://github.com/public-apis/public-apis for other services
      services: {
      },
      locale: '/* this will be copied from date.locale */',
      defaultFormats: {
        date: '/* this will be copied from date.dateStyle if exists */',
        time: '/* this will be copied from date.timeStyle if exists */',
      },
      user: {
        first: '/* this will be copied from tagValue.me.firstName */',
        last: '/* this will be copied from tagValue.me.lastName */',
      },
...
```
