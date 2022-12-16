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

### Simple Example

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
