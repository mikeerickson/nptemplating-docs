---
sidebar_position: 3
---

# Template Runner
`np.templating` includes the `templaterunner` command for use within callback URLs. This command allows you to to use a template to insert content into a note automatically. 

## Required Attributes

one of either `opennotetitle` or `writenotetitle` is required to be present in the frontmatter of the template. this attribute specifies the target note the template content should be placed. 

If `openNoteTitle` is used, the target note will be opened in the editor with the content of the template inserted. If `writeNoteTitle` is use, the content of the template will be inserted into the target note in the background.

The following special values can be used for `openNoteTitle` or `writeNoteTitle`:

- `<TODAY>`: use today's daily note as the target note
- `<THISWEEK>`: use the current weekly note as the target note
- `<NEXTWEEK>`: use next week's weekly note as the target note
- `<CURRENT>`: use the note in the editor as the target note

## Other Attributes

The following attributes control how template content is inserted into the target note.

### location

The `location` attribute may be one of the following values:

- `append`: template content will be appended to the target note
- `replace`: template content will replace the content in the target note

If the `location` attribute is not present, the template content will be inserted at the beginning of the target note.

### writeUnderHeading

If `writeUnderHeading` has a value, the content of the template will be inserted under the specified heading. The value of the `location` attribute will control how the content is inserted within the heading.

If `writeUnderHeading` is set to either `<CHOOSE>` or `<SELECT>`, you will be prompted to select a heading at the time the content is inserted

## Examples

### Simple Example - Daily Template

In this example, we will update a daily notes template to allow it to be applied by opening a URL. Once this is set up, you can use another application to launch the URL which will open NotePlan and apply the template automatically. This is useful to launch NotePlan first thing in the morning and ensure you start off with your daily template applied.

Let's start with the sample Daily Template that is included with NotePlan

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
openNoteTitle: <TODAY>
location: append
```

This will tell `templateRunner` to open today's daily note and append the content of the template to the note.

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
noteplan://x-callback-url/runPlugin?pluginID=np.Templating&command=templateRunner&arg0=Daily%20Note%20%28Simple%29&arg1=true&arg2=
```


### Advanced Example - Inline Meeting Notes

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
openNoteTitle:  <TODAY>
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
