---
sidebar_position: 6
---

# Looping

#### for loops

```markdown
<% for(let i = 0; i <= 10; i++) { %> <%= i %> <% } %>
```

#### array.forEach

```markdown
<% names = ['mike','kira','joelle','brady','bailey','trevor'] %>
<% names.forEach((name, i) => {
%><%= i === names.length - 1 ? utils.titleCase(name) : utils.titleCase(name) + '\n' %><%});%>

<%= '#### array.forEach (handling whitespace)\n'%><% names = ['mike','kira','joelle','brady','bailey','trevor'] %><% names.forEach((name, i) => {
%><%= i === names.length - 1 ? utils.titleCase(name) : utils.titleCase(name) + '\n' %><%});%>
```
