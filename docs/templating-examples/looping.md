---
sidebar_position: 6
---

# Looping

#### for loops

```javascript
<% for(let i = 0; i <= 10; i++) { %> <%~ i %> <% } %>
```

### Produces the following

```markdown
 0  1  2  3  4  5  6  7  8  9  10
 ```

#### array.forEach (Simple)
The following example will iterate an array of values, outputting each item

```javascript
### Event Data

<% events = ['event1','event2','event3'] -%>
<% events.forEach((event, i) => {
%><%~ event %>
<%});%>
```

#### Produces the following

```markdown
### Event Data

event1
event2
event3
```

#### array.forEach

```javascript
<% names = ['mike','kira','joelle','brady','bailey','trevor'] %>
<% names.forEach((name, i) => {
%><%~ i === names.length - 1 ? utils.titleCase(name) : utils.titleCase(name) + '\n' %><%});%>

<%= '#### array.forEach (handling whitespace)\n'%><% names = ['mike','kira','joelle','brady','bailey','trevor'] %><% names.forEach((name, i) => {
%><%~ i === names.length - 1 ? utils.titleCase(name) : utils.titleCase(name) + '\n' %><%});%>
```

#### Produces the following

```markdown
#### array.forEach (handling whitespace)
Mike
Kira
Joelle
Brady
Bailey
Trevor
```
