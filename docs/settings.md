---
sidebar_position: 3
---

# Settings
Using the NotePlan Plugin Settings interface you can customize various settings to control how how templates display information.

**Step 1:** Open NotePlan Preferences (NotePlan -> Preferences) and click the Plugins tab

**Step 2:** Find `np.Templating` in the NotePlan Plugin list

**Step 3:** Click the gear icon to access `np.Templating` settings

![np.Templating Settings](/img/noteplan-plugin-settings.png)

#### Locale
Default: `en-US`

The locale which is used when creating date or time formats.

#### First Name
Your first name, used when referencing user object (e.g. `<%= user.first %>`)

#### Last Name
Your last name, used when referencing user object (e.g. `<%= user.last %>`)

#### Email
Your email, used when referencing user object (e.g. `<%= user.email %>`)

#### Phone
Your phone number, used when referencing user object (e.g. `<%= user.phone %>`)

#### Date Format
Default: `<system>`

Desired date format, used when referencing date object (e.g. `<% date.now() %`)

#### Time Format
Default: `<system>`

Desired date format, used when referencing time object (e.g. `<% time.now() %`)

#### Web Service
A JSON object which is accessible using `web.services()` method

- For services which return a simple response, you can just supply URL
- For services which return a JSON object, you can define the `url` and `keys`

:::info
For more information about using web services, refer to [Web Module](/docs/templating-modules/web-module)
:::
