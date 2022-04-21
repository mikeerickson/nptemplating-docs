---
sidebar_position: 15
---

# Javascript Weather Example (with Fetch)

#### Javascript in Templates

You can include full Javascript programs inside templates as long as you surround each Javascript line with the tags `<% JS_HERE ->`

#### Weather Example

To demonstrate a JS function inside templates, we will use a weather example. The default `web.weather()` template module is great because it requires zero configuration. No API key, no lat/long for your location, etc. It just works. For most people. But if you use a VPN or for some reason, your IP address cannot be mapped to your proper location, you will get the wrong weather. In that case, you can use the Template code below to get weather for any lat/long in any format (imperial/metric). The code has comments that tell you how to configure it. 

```
<% /* ----------------------------------------  -%>
<%  This template will allow you to get weather by specifying lat/long using openweather.org  -%>
<%  1) You need to get your own API key from https://openweathermap.org/  and put it in the openWeatherAPIKey config field below -%>
<%  2) Get your lat/long from Google. Open https://www.google.com/maps, search for your address. Right-click the place or area on the map. This will open a pop-up window. You can find your latitude and longitude in decimal format at the top. -%>
<% ...Put them in the lat and long config fields below (don't forget the minuses if your lat/long have them) -%>
<%  3) Choose whether you want "imperial" (F) or "metric" (C) degree output and put in units config below -%>
<%  ---- EDIT YOUR WEATHER CONFIG HERE ------------------- */  -%>
<% const config = { openWeatherAPIKey: "YOUR_KEY_HERE",  lat: "34.0735807",long: "-118.4633328", units: "imperial"} -%>
<% /* -- DO NOT TOUCH ANYTHING BELOW THIS LINE --------------------- */ -%>
<% const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${config.lat}&lon=${config.long}&exclude=current,hourly,minutely&units=${config.units}&appid=${config.openWeatherAPIKey}`  -%>
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
Weather: <%~ weatherLine %>
```
