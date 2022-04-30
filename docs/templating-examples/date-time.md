---
sidebar_position: 2
---

# Date and Time
The `np.Templating` DateModule and TimeModule provide a number of methods which can be used within your templates. The following example demonstrates how to use a variety of these methods. Specifics of date formatting strings can be [found here](https://momentjs.com/docs/#/parsing/string-format/)

## Template

```markdown
Test (DateModule)
*Demonstrates DateModule, providing date/time utilities*
*****
#### Templates with date and time

:::tip
#### Formatting Dates
The Date Module uses JavaScript `moment` library internally, thus you can use any of the [moment formatting](https://momentjs.com/docs/#/parsing/string-format/) options to get the exact date or time format you want.
:::

Date now: *<%- np.date.now() %>*
Date now with format: *<%- np.date.now("Do MMMM YYYY") %>*

Today: *<%- date.today() %>*
Last week: *<%- np.date.now("dddd Do MMMM YYYY", -7) %>*
Last week of current date: *<%- np.date.now("", -7) %>*
Today: *<%- np.date.now("dddd Do MMMM YYYY, ddd") %>*
Next week: *<%- np.date.now("dddd Do MMMM YYYY", 7) %>*
Today w/ format: *<%- date.now("dddd MMMM Do, YYYY HH:mm A") %>*

Day Number: *<%- date.dayNumber() %>*
Day Number w/ Specific Date: *<%- date.dayNumber('2021-12-25') %>*

#### Day Number Constants
Sunday: *<%- date.DAY_NUMBER_SUNDAY %>*
Monday: *<%- date.DAY_NUMBER_MONDAY %>*
Tuesday: *<%- date.DAY_NUMBER_TUESDAY %>*
Wednesday: *<%- date.DAY_NUMBER_WEDNESDAY %>*
Thursday: *<%- date.DAY_NUMBER_THURSDAY %>*
Friday: *<%- date.DAY_NUMBER_FRIDAY %>*
Saturday: *<%- date.DAY_NUMBER_SATURDAY %>*

Week Number: *<%- date.weekNumber() %>*
Week Number w/ Specific Date: *<%- date.weekNumber('2021-12-25') %>*

Last month: *<%- np.date.now("YYYY-MM-DD", "P-1M") %>*
Next year: *<%- np.date.now("YYYY-MM-DD", "P1Y") %>*

Date tomorrow: *<%- np.date.tomorrow() %>*
Date tomorrow with format: *<%- np.date.tomorrow("Do MMMM YYYY") %>*

Date yesterday: *<%- np.date.yesterday() %>*
Date yesterday with format: *<%- np.date.yesterday("Do MMMM YYYY") %>*

Add 3 Business Days: *<%- np.date.businessAdd(3) %>*
Add 3 Business Days w/ PivotDate 2021-11-24: *<%- np.date.businessAdd(3,'2021-11-24') %>*

Subtract 3 Business Days: *<%- np.date.businessSubtract(3) %>*
Subtract 3 Business Days w/ PivotDate 2021-11-22: *<%- np.date.businessSubtract(3,'2021-11-22') %>*

This week's Monday: *<%- np.date.weekday("YYYY-MM-DD", 1) %>*
Next Monday: *<%- np.date.weekday("YYYY-MM-DD", 8) %>*

Week Of: *<%- np.date.weekOf() %>*
Week Of (only pivotDate): *<%- np.date.weekOf('2021-11-03') %>*
Week Of: *<%- np.date.weekOf(null, null, '2021-11-03') %>*

Current Time: *<%- np.time.now('h:mm A') %>*
Current Date: *<%- date.now() %>*
```

## Output

```markdown
#### Templates with date and time

Date now: *2021-12-24*
Date now with format: *24th December 2021*

Today: *2021-12-24*
Last week: *Friday 17th December 2021*
Last week of current date: *2021-12-17*
Today: *Friday 24th December 2021, Fri*
Next week: *Friday 31st December 2021*
Today w/ format: *Friday December 24th, 2021 05:10 AM*

Day Number: *5*
Day Number w/ Specific Date: *6*

#### Day Number Constants
Sunday: *0*
Monday: *1*
Tuesday: *2*
Wednesday: *3*
Thursday: *4*
Friday: *5*
Saturday: *6*

Week Number: *51*
Week Number w/ Specific Date: *51*

Last month: *2021-11-24*
Next year: *2022-12-24*

Date tomorrow: *2021-12-25*
Date tomorrow with format: *25th December 2021*

Date yesterday: *2021-12-23*
Date yesterday with format: *23rd December 2021*

Add 3 Business Days: *2021-12-29*
Add 3 Business Days w/ PivotDate 2021-11-24: *2021-11-29*

Subtract 3 Business Days: *2021-12-21*
Subtract 3 Business Days w/ PivotDate 2021-11-22: *2021-11-17*

This week's Monday: *2021-12-20*
Next Monday: *2021-12-27*

Week Of: *W51 (2021-12-19..2021-12-25)*
Week Of (only pivotDate): *W44 (2021-10-31..2021-11-06)*
Week Of: *W44 (2021-10-31..2021-11-06)*

Current Time: *7:10 AM*
Current Date: *2021-12-24*
```
