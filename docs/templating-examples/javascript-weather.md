---
sidebar_position: 15
---

# Using JavaScript in Templates
*Contributed by: @dwertheimer*

`np.Templating` can be configured to execute a wide variety of JavaScript commands, directly in the template.

Using the leading tag `<%` at the beginning of line will instruct `np.Templating` to interpret whatever comes next as a standard JavaScript command, but will not output anything when the template is rendered, and when combined with the `<%-` tag, you can then output any variable you created previously when the template is rendered.

**Example**

The following will instruct `np.Templating` to initialize a variable `firstName` with the value of `Mike`

```javascript
<% const firstName = 'Mike' %>
```

Then, you can output the value when rendered using one of the `np.Templating` output tags

```javascript
<%- firstName %> // output Mike
```


## Complex Example

To demonstrate how to use JavaScript commands inside templates, we will use the `openweathermap.org` API to gather weather information based on a predefined lat/long combination.

While the [Web Module](/docs/templating-modules/web-module) `weather()` command provides numerous formatting options, it is based on your current location using the devices "IP Address", which varies based on your current location (and can be random when using a VPN connection).

### Using Latitude/Longitude (lat/long)

If you would like to have greater control, you can also use a service such as `openweathermap.org` API to retrieve weather, utilizing predefined lat/long value and you own personal API key.

```javascript

<% /* ----------------------------------------  -%>

<%  This template will allow you to get weather by specifying lat/long using openweathermap.org  -%>
<%  1) You need to get your own API key from https://openweathermap.org/  and put it in the openWeatherAPIKey config field below -%>
<%  2) Get your lat/long from Google. Open https://www.google.com/maps, search for your address. Right-click the place or area on the map. This will open a pop-up window. You can find your latitude and longitude in decimal format at the top. -%>
<% ...Put them in the lat and long config fields below (don't forget the minuses if your lat/long have them) -%>
<%  3) Choose whether you want "imperial" (F) or "metric" (C) degree output and put in units config below -%>
<%  /* ---- EDIT YOUR WEATHER CONFIG HERE ------------------- */  -%>

<% const config = { openWeatherAPIKey: "YOUR_KEY_HERE",  lat: "34.0735807",long: "-118.4633328", units: "imperial"} -%>
<% /* -- DO NOT TOUCH ANYTHING BELOW THIS LINE --------------------- */ -%>
<% const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${config.lat}&lon=${config.long}&exclude=current,hourly,minutely&units=${config.units}&appid=${config.openWeatherAPIKey}`  -%>
<% const jsonIn = await fetch(weatherURL);  -%>
<% const allWeatherData = JSON.parse(jsonIn);  -%>
<% const weatherTodayAll = allWeatherData?.daily['0']; -%>
<% const fMax = weatherTodayAll.feels_like.day.toFixed(0); -%>
<% const fMin = weatherTodayAll.feels_like.night.toFixed(0); -%>
<% const minTemp = weatherTodayAll.temp.min.toFixed(0); -%>
<% const maxTemp = weatherTodayAll.temp.max.toFixed(0); -%>
<% const weatherDesc = utility.titleCase(weatherTodayAll.weather['0'].description ?? '') -%>
<% const units = config.units === 'imperial' ? '°F' : '°C'; -%>
<% const timezone = allWeatherData.timezone; -%>
<% /* ---- DO NOT TOUCH ANYTHING ABOVE THIS LINE --------------------- */ -%>
<% /* ---- DEFAULT OUTPUT EXAMPLE-- "Scattered Clouds 57°F-65°F; Feels like: 56°F-62°F" */ -%>
<% /* ---- EDIT THE FOLLOWING LINE ONLY IF YOU WANT TO MODIFY OUTPUT  FORMAT ----- */ -%>
<% const weatherLine = `${weatherDesc} ${minTemp}${units}-${maxTemp}${units}; Feels like: ${fMin}${units}-${fMax}${units}` -%>
<% /* ---- THE FOLLOWING LINE INSERTS THE CONTENT INTO YOUR DOCUMENT; EDIT AS YOU SEE FIT ------ */ -%>
Weather: <%- weatherLine %>
```
