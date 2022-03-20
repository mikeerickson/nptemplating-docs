---
sidebar_position: 8
---

# Web Module

## Overview
The Web Module provides a suite of methods which provide access to web APIs such as advice, affirmation or weather.

## Methods
> namespace: `web`

The following are the methods available in the Web Module, and they can be used in any `np.Templating` template, no additional configuration.

*****

> #### weather(format? : string = '') : string
Returns weather information from [wttr.in](https://wttr.in) weather service, using the [Weather Format](/docs/settings) from `np.Templating` Settings, or a custom `format` string.

:::tip
See the [wttr.in documentation for the detailed JSON output format](https://github.com/chubin/wttr.in#different-output-formats) to see fields are available. All those in the `current_condition` are available by adding colons either side (e.g. `:humidity: `).
:::

- `format?` - If you wish to override the settings value, you can supply an optional format string with placeholders for the pieces of weather data you wish to output from `current_condition` key from `wttr.in` response.

Each placeholder must be surrounded colons before and after key (e.g. `:FeelsLikeF`)

#### Additional Keys
In addition to `current_condition` keys, the following placeholders available from elsewhere in the harder-to-access parts of the JSON response:

- `mintempC` and `maxtempC` for the current day in Celsius
- `mintempF` and `maxtempF` for the current day in Fahrenheit
- `areaName`
- `region` for state att time of render
- `country` for state att time of render

**Examples: Default**

The following will use default weather format from `np.Templating` [settings](/docs/settings)

```markdown
Weather: <%- np.weather() %>
```

and produce something like

Fountain Valley, California, United States: ⛅️  +55°F

*****
**Examples: Custom Format String**

The following will override the default weather format from `np.Templating` settings

```markdown
Weather: <%- np.weather( ':icon: :description: :mintempC:-:maxtempC:°C (:areaName:)' ) %>
```

and will produce something like

Weather: ☀️ Sunny 6-16°C (Basingstoke)

*****
The following is a more verbose example using addition placeholders

```markdown
Weather: <%- np.weather( ':icon: :description: :FeelsLikeF:°F [low/high: :mintempF:-:maxtempF:°F, wind: :winddir16Point: :windspeedMiles:mph] (:areaName:, :region:) ' ) %>
```

and will produce something like

☁️ Partly cloudy 64°F [low/high: 58-68°F, wind: WSW 15mph] (Talbert, California)


*****
