---
sidebar_position: 1
---

# Simple
In the simplest form, a template will  have some content (information below the template separator line). In this example, the template simply uses the `user.first` object in `_configuration` note

## Configuration

```json
    ...
    templates: {
      ...
      user: {
        first: 'Mike',
        last: 'Erickson',
        ...
      },
    }
    ...
```

## Template

```markdown
# Test (HelloWorld)
*****
Hello <%= user.first %>
```

## Output

```markdown
Hello Mike
```
