---
sidebar_position: 5
---

# Web Module

## Overview
The Web Module provides a suite of methods which provide access to web APIs such as advice, affirmation or weather.

## Methods
> namespace: `web`

The following are the methods available in the Web Module, and they can be used in any `np.Templating` template, no additional configuration.

*****

### advice
> #### advice() : string
Returns random advice

*****

### affirmation
> #### affirmation() : string
Returns random affirmation

*****

### quote
> #### quote() : string
Returns random quote

*****

### service
> #### service(serviceOrUrl: string = '', key? : string = '') : string
Returns service information from custom URL or entry from `np.Templating` [Web Service Setting](/docs/settings)

- `serviceOrUrl?` - Value from Settings Web Services or Full API URL
- `key?` - Array of API result index, keys or formatting values (see example below)

**Example: Setting Service**
The following example will return API information for `developerQuote` setting from settings

```markdown
<%- await web.services('developerQuote') %>
```

🙆 “I say looking on the bright side of life never killed anybody.”

**Example: Custom API Endpoint**
The following example will retrieve value from defined API endpoint

```markdown
<%- await web.services('https://random-data-api.com/api/address/random_address',['street_address', '\n','secondary_address', '\n', 'city', ', ', 'state_abbr',' ','zip_code']) %>
```

API request returns following JSON data

```json
{
"id": 9861,
"uid": "fe3fe033-db73-474b-bb29-ae6ae7bf67ae",
"city": "East Glenna",
"street_name": "Houston Roads",
"street_address": "34157 Purdy Island",
"secondary_address": "Apt. 660",
"building_number": "35118",
"mail_box": "PO Box 2474",
"community": "Summer Place",
"zip_code": "07215-2642",
"zip": "59694",
"postcode": "14367",
"time_zone": "America/Caracas",
"street_suffix": "Viaduct",
"city_suffix": "mouth",
"city_prefix": "West",
"state": "Alaska",
"state_abbr": "PA",
"country": "Poland",
"country_code": "TK",
"latitude": 38.36868710203052,
"longitude": 137.08981449317662,
"full_address": "96697 McGlynn Tunnel, Powlowskihaven, AL 38836-5753"
}
```

Second parameter will build result, using array of indexes, keys and formatting strings

- Use `street_address` key
- Add newline character
- Use `secondary_address` key
- Add newline character
- Use `city` key
- Add comma character
- Use `state_abbr` key
- Add space character
- Use `zip_code` key

```javascript
['street_address', '\n','secondary_address', '\n', 'city', ', ', 'state_abbr',' ','zip_code']
```

And will produce something like

34157 Purdy Island
Apt. 660
East Glenna, PA 07215-2642

Web request that returns array of results

```javascript
<%- await web.services('https://zenquotes.io/api/random',['[0].q', ', ', '[0].a']) %>
```

Returns an array of quotes

```json
[
	{
		"q": "A clever person turns great troubles into little ones, and little ones into none at all. ",
		"a": "Chinese Proverb",
		"h": "<blockquote>&ldquo;A clever person turns great troubles into little ones, and little ones into none at all. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
	}
]
```

And piece together using `key`

```javascript
['[0].q', ', ', '--', '[0].a']
```

- Access first array element, grabbing `q` key
- Add comma character
- Add two dash characters
- Access first array element, grabbing `a` key

Will produce the following

A clever person turns great troubles into little ones, and little ones into none at all.

-- Chinese Proverb

*****

> #### verse() : string
Returns random Bible verse

*****

### weather
> #### weather(format? : string = '') : string
Returns weather information from [wttr.in](https://wttr.in) weather service, using the [Weather Format](/docs/settings) from `np.Templating` Settings, or a custom `format` string.

:::note
You can set the default weather format in `np.Templating` [settings](/docs/settings) which will be used when `<%- web.weather() %>` command is executed
:::

- `format?` - If you wish to override the settings value, you can supply an optional format string with placeholders for the pieces of weather data you wish to output from `current_condition` key from `wttr.in` response.

Each placeholder must be surrounded colons before and after key (e.g. `:FeelsLikeF:`)

#### Additional Keys
In addition to `current_condition` keys, the following placeholders available from elsewhere in the harder-to-access parts of the JSON response:

- `mintempC` and `maxtempC` for the current day in Celsius
- `mintempF` and `maxtempF` for the current day in Fahrenheit
- `areaName`
- `region` for state att time of render
- `country` for state att time of render

:::tip
See the [wttr.in documentation for the detailed JSON output format](https://github.com/chubin/wttr.in#different-output-formats) to see fields are available. All those in the `current_condition` are available by adding colons either side (e.g. `:humidity: `).
:::

## Weather Examples

### Default

The following will use default weather format from `np.Templating` [settings](/docs/settings)

```markdown
Weather: <%- np.weather() %>
```

and produce something like

Fountain Valley, California, United States: ⛅️  +55°F

*****

### Custom Format String

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

☁️ Partly cloudy 64°F [low/high: 58-68°F, wind: WSW 15mph] (Fountain Valley, California)


*****
