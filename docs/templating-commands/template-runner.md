---
sidebar_position: 3
---

# Template Runner
`np.templating` includes the `templaterunner` command to allow templates to be invoked from callback URLs. This allows you to to use a template to insert content (including dynamic Templating tag-generated conntent) into a note of your choosing. It can do so silently (e.g. just write to a note but not pull it up in the Editor, or actively -- display the note you specify at run-time. Typically, Template Runner templates are activated when a link is clicked from within our outside of NotePlan (e.g. Shortcuts, Keyboard Maestro or wherever). This gives you a way to pass arbitrary information into your notes.
## Required Attributes

At its core. a Template Runner template is a basic template note with frontmatter. There is only one *required* field in the frontmatter:
### getNoteTitled (required)

This frontmatter attribute tells Template Runner what document to pull up (either silently or in focus in NotePlan).

The value of this attribute can be one of the following:

- a note title - should be a unique title (you will get the first note if there are more than one)
- `<current>` - the currently opened note in the NotePlan Editor
- `<today>` - today's note on whatever day the link is clicked to run the template
- `<thisweek>`
- `<nextweek>`
- `<choose>` - user will be asked to select a note at run-time

Example:

```
---
getNoteTitled: My Tasks Document Title
---
```

## Other Attributes

If no other arguments are set in the Template, the specified note will simply be opened in the Editor (see link creation below). However, things get more interesting when you set some of the optional fields below. the following attributes control how template content is inserted into the target note. 

### replaceNoteContents

The simplest templateRunner template wipes out the contents of the note specified in `getNoteTitled` and replaces the note contents with the value of the template 

The value of `replaceNoteContents` can be 'true' or 'yes' -- omitted for false

**Note:**: 
If `replaceNoteContents` is true, then `location` and `writeUnderHeading` are ignored

Example:

```
---
getNoteTitled: My Tasks Document Title
replaceNoteContents: true
---
<% - date.timestamp() %> This line will be the text in the document after the link is clicked
```

### writeUnderHeading

The `writeUnderHeading` attribute tells Template Runner *under which heading* to place the template content if you are not replacing all the note's contents.  By default, content will be prepended (immediately following the heading). If a heading that you specify here does not exist in the *getNotetitled* note, the heading and content will be created and added to the end of the note.

The `writeUnderHeading` attribute can be either:
- a heading name 
- `<choose>` - will dynamically ask the user to choose a heading to insert the content under at run-time.

Example:

```
---
getNoteTitled: <today>
writeUnderHeading: My Daily Journal
---
- <% - date.timestamp() %> This text will appear in my daily note under the heading *My Daily Journal*
```

### location

The `location` attribute tells Template Runner where/how to place the template contents in the note. *location* applies contextually depending on whether *writeUnderHeading* is set or not. It may be one of the following values:

- `prepend` - (the default) - prepends content directly under the heading if *writeUnderHeading* is set, otherwise prepends content at the top of the note itself if *writeUnderHeading* is omitted.
- `append` - appends content directly under the heading if *writeUnderHeading* is set, otherwise appends content at the top of the note itself if *writeUnderHeading* is omitted.
- `replace` - will replace any text under the heading with the new text from the template, leaving the rest of the note intact. **Note:** Beware: This uses NotePlan's definition of where a heading's content starts/ends. This will replace all text until either (a) a heading of the same or greater heading level is located, or (b) two empty lines are reached. So if you have "---" horizontal rules, etc. they will be replaced.

> *Tip*:
Make sure your target note has another heading of the same or higher level underneath it. If necessary, you can even put in a blank heading, e.g.:
`# `
...which will not be seen by users but will define the end of the previous heading's block.

Example:

```
---
getNoteTitled: <thisweek>
writeUnderHeading: Thoughts for the week
location: append
---
- <% - date.timestamp() %> This text will appear in my daily note under the heading *Thoughts for the week*, but underneath any text that has been written before
```


### Other variables (of your choosing)

The real power of Template Runner Templates comes from including dynamic variables in the Callback URL and using those in the template. Any variable name that is not a reserved word can be passed in the URL and used in your template when it is run by Template Runner. 

Example (basically the same as above, but with variable content)
```
---
getNoteTitled: <thisweek>
writeUnderHeading: Thoughts for the week
location: append
---
- <% - date.timestamp() %> <%- var1 %>
```

Notice how in this example, `var1` is not set in the frontmatter. This is a variable value that is passed through in your callback link, in this example, perhaps you passed through some thoughts that you dictated (and encoded using Shortcuts) as `...var1=My%20Thoughts%etc`. Template Runner passses through all the variables it receives to the Templating Engine to include in values just as if you had included those values in frontmatter.

> *Tip* 
Because it's hard to predict what words are reserved in the Templating system, we suggest you use names that are very unlikely to exist elsewhere. For example, *var1*, *var2*, *var3* or something like *myThoughtsVar*

## Running a Template Runner Template

X-Callback-Links, especially ones with lots of variables attached, can be a bit daunting. The easiest way to get a URL to invoke your template is by using the `Link Creator` plugin and the command `/Get X-Callback-URL`, and selecting `RUN a template`. This command will help you create a link and pass variables through to Template Runner. In fact, the `RUN a template` will ask you if you want it to create the actual template for you by interactively asking you questions, and then will deliver you a URL that you can use to invoke the new template. 

## Examples

### Simple Example - Running your Daily Template from outside NotePlan

In this example, we will start with a simple daily notes template and convert this to be a Template Runner-enabled template to allow it to be applied by opening a URL. Once this is set up, you can use another application to launch the URL which will open NotePlan and apply the template automatically. This is useful to launch NotePlan first thing in the morning and ensure you start off with your daily template applied.

Let's start with the sample Daily Template that is included with NotePlan:

```
---
title: Daily Note (Simple)
type: empty-note
documentation: https://help.noteplan.co/article/136-templates
---
## Tasks


## Journal
- How did it go yesterday (<%= np.date.yesterday("Do MMMM YYYY") %>)?:
- Today's (<%= np.date.now("Do MMMM YYYY") %>) goal is: 

```

In the frontmatter section, add the following properties:

```
getNoteTitled: <TODAY>
location: append
```

This will tell `templateRunner` to open today's daily note and append the content of the template to the note. In this example, we are not passing any additional variables with the URL. We are just using Template Runner to run the template on our daily note.

You can then use the `Link Creator` plugin to walk through generating link to apply your template. 

1. Open the command bar
2. Invoke `/Get X-Callback-URL`
3. Select `RUN a template`
4. Select your template - that would be `Daily Note (Simple)` in our exmple above
5. Select **Yes** on the dialog presented to confirm you want to open the note in the editor
6. Click **OK** in the next prompt for parameters - we don't have any parameters to send in for this example. 
7. Select **No** in the next prompt asking whether to return to other app

At this point, you can opt to have a raw link or a pretty link inserted into your note, which you can then copy and paste elsewhere. The link should look something like this:

```
noteplan://x-callback-url/runPlugin?pluginID=np.Templating&command=templateRunner&arg0=Daily%20Note%20%28Simple%29&arg1=true
```

### Basic Variable-Passing Example

In this example, I use Template Runner to add a house "fix-it" item to my weekend chore list whenever the need arises (using my template named *addFixIt*):

```
---
title: addFixIt
type: template-runner (this is not necessary, just a reminder to me of what this template is)
getNoteTitled:  "⭐️ Tasks"
writeUnderHeading: "fix-its"
location: append
exampleSilent: noteplan://x-callback-url/runPlugin?pluginID=np.Templating&command=templateRunner&arg0=addFixIt&arg1=false&arg2=textVar%3Dsomething
---
* <%- textVar %> #fixit
```
As you can probably tell, what this does is add a todo item underneath the heading "fix-its" in my note "⭐️ Tasks". arg2 is set to `false` so the text will be added behind the scenes, and will not change the note currently in the Editor. The variable "textVar" is set to the word "something" in this example, but in my real use of this link, *something* is replaced with the URL Encoded text that I dicated into a Shortcut.

### Another Variable-Passing Example

This is a Shortcut I use to log a workout during the day under my "Today's Notes & Actions" heading:

```
---
title: logWorkout
openNoteTitle:  <TODAY>
writeUnderHeading: "Today's Notes & Actions"
location: append
exampleURL: noteplan://x-callback-url/runPlugin?pluginID=np.Templating&command=templateRunner&arg0=logWorkout&arg1=true&arg2=var1%3DVALUE1%3Bvar2%3DVALUE2
---
<% - date.timestamp() %> #workout <%- var1 %> | <%- var2 %>
```
In this example, I passed two variables (var1 and var2) corresponding to two prompts I use in Shortcuts. All variables are passed in as arg2 in the form of:
`arg1=VALUE1;arg2=VALUE2` (template variables are separated by semicolons)
After these variables are URL-encoded, they look like this in the final URL: 
`...arg2=var1%3DVALUE1%3Bvar2%3DVALUE2`
...now you probably see why the `URL Creator` will save you so much trial and error.

### Super Advanced Example - Inline Meeting Notes

This example is a bit more involved, and requires two separate templates. The first template is configured as a meeting note template (`type: meeting-note`) and is used to run a bit of JavaScript which then calls the `templateRunner` plugin with the second template. 

#### First Template

The template below can be copied as-is and placed in your template folder. Feel free to change the name, but leave the JavaScript code unmodified. I called this template **Inline Meeting Notes** because when used, it will insert the meeting notes into my daily note, rather than creating a standalone note file.

When this template is invoked, it will run the JavaScript code. The first line of the code creates a parameter string to pass to templateRunner, and includes all the variables you would typically use in a meeting notes template. Because our second template is not being triggered by any traditional meeting note workflow, it doesn't have a link to an event. Without an event, it doesn't have access to these variables, so we must pass them in.

The second line of code calls the templateRunner command, and passes in both a target template, and the list of parameters just constructed. In this example, the target template is called **Meeting Notes**. If you want to change the name of the target template, make sure to update this code as well.

````
---
title: Inline Meeting Notes
type: meeting-note
---
```javascript
const eventInfoString = `eventTitle=${eventTitle};eventNotes=${eventNotes};eventLink=${eventLink};calendarItemLink=${calendarItemLink};eventAttendees=${eventAttendees};eventAttendeeNames=${eventAttendeeNames};eventLocation=${eventLocation};eventCalendar=${eventCalendar};eventDate=${eventDate('YYYY-MM-DD')};eventStart=${eventDate("YYYY-MM-DD HH:MM")};eventEnd=${eventEndDate("YYYY-MM-DD HH:MM")}`
await DataStore.invokePluginCommandByName("templateRunner","np.Templating",["Meeting Notes",true,eventInfoString])
```
````

#### Second Template

The second template will look more like a traditional meeting note template,
but will include additional frontmatter attributes needed by templateRunner.
In this case, we're telling templateRunner to do the following:

1. Open today's daily note
2. Put the content of the template under the heading **Today's Notes** 
3. Append the content of the template within this heading (newer notes at
   the bottom)

```
---
title: Meeting Notes
getNoteTitle:  <TODAY>
writeUnderHeading: "Today's Notes"
location: append
---
### <%- eventTitle %> - <%- eventDate %>
**Event:**  <%- calendarItemLink %>
**Link:** <%- eventLink %>
**Attendees:** <%- eventAttendees %>
---

#### Agenda
-

#### Meeting Minutes
-
```

#### Running the Template

Once these two templates are in place, you can create meetings notes just as
you did before. When you select **Inline Meeting Notes** as your template
for an event, your meeting notes will now show up in your daily note rather
than as a standalone note file. 

## Template Runner URL Anatomy

A Template Runner URL looks like:
`noteplan://x-callback-url/runPlugin?pluginID=np.Templating&command=templateRunner&arg0=logWorkout&arg1=true&arg2=var1%3DVALUE1%3Bvar2%3DVALUE2`

Broken apart, here's what that is comprised of:

`noteplan://x-callback-url/runPlugin?pluginID=np.Templating&command=templateRunner`: This tells NotePlan to call the templateRunner command inside of the np.Templating plugin
`&`
`arg0=logWorkout`: The first argument (arg0 is required and) specifies the **title** of the template to run
`&`
`arg1=true`: This tells Template Runner whether to open the resulting document in the Editor (true) or run silently (not change what's in the Editor) -- (false). Note: Because of the way X-Callbacks work in the Apple ecosystem, there is no way to keep NotePlan from opening. It has to open to run the command. However, using this argument, you can choose whether to change what's in the Editor or not.
`&`
`arg2=var1%3DVALUE1`: The third argument is a key=value pair(s) or variables, separated by semicolons. These values need to be URL-encoded, so the "=" actually becomes a `%3D`, spaces are `%20` and a semicolon is `%3B`. So a variable string with two variables separated by semicolons:
`arg2=VALUE1 contains spaces;arg2=VALUE2`, after URL-encoding, looks like this in the final URL:
`arg2=var1%3DVALUE1%20contains%20spaces%3Bvar2%3DVALUE2`