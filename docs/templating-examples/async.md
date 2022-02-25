---
sidebar_position: 4
---

# Asynchronous Functions
`np.Templating` supports async methods within templates, you will just preface the call to an async method using the `await` keyword just as you would writing the code in JavaScript.  One of those examples which uses async calls is the `WebModule` `services` method as demonstrated below, which uses the `Web Services` key in np.Templating Settings (NotePlan -> Preferences -> Plugins -> Settings)

## Configuration

```json
    // template variables and formats
    templates: {
      // check https://github.com/public-apis/public-apis for other services
      services: {
        // can also use web.affirmation()
        affirmation: 'https://affirmations.dev',
      },
    },
```

## Sample API Output
When the `https://affirmations.dev` API is accessed, it produces the following output.

```json
{
  "affirmation": "Struggling means you're learning"
}
```

## Template
The first part of the `web.services` method is to preface call using `await` keyword.  This instructs `np.Templating` to await for a response from `web.services` method before proceeding to next line.

In this `web.services` API call, it returns a simple object with an `affirmation` key, along with the associated quote. This key is passed as the second parameter the `web.services` method.  Secondly, you use the `await` keyword which is required by the `web.services`.

```markdown
# Test (Async)
*****

> "<%- await web.services('affirmation','affirmation') %>"
```

## Output

```markdown
> "You're a smart cookie"
```
