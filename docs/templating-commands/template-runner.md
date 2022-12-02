---
sidebar_position: 3
---

# Template Runner
`np.templating` includes the `templaterunner` command for use within callback URLs. This command allows you to to use a template to insert content into a note automatically. 

## Required Attributes

one of either `opennotetitle` or `writenotetitle` is required to be present in the frontmatter of the template. this attribute specifies the target note the template content should be placed. 

If `openNoteTitle` is used, the target note will be opened in the editor with the content of the template inserted. If `writeNoteTitle` is use, the content of the template will be inserted into the target note in the background.

The following special values can be used for `openNoteTitle` or
`writeNoteTitle`:

- `<TODAY>`: use today's daily note as the target note
- `<THISWEEK>`: use the current weekly note as the target note
- `<NEXTWEEK>`: use next week's weekly note as the target note
- `<CURRENT>`: use the note in the editor as the target note

## Other Attributes

The following attributes control how template content is inserted into the
target note.

### location

The `location` attribute may be one of the following values:

- `append`: template content will be appended to the target note
- `replace`: template content will replace the content in the target note

If the `location` attribute is not present, the template content will be inserted at the beginning of the target note.

### writeUnderHeading

If `writeUnderHeading` has a value, the content of the template will be
inserted under the specified heading. The value of the `location` attribute
will control how the content is inserted within the heading.

If `writeUnderHeading` is set to either `<CHOOSE>` or `<SELECT>`, you will be prompted to select a heading at the time the content is inserted

## Examples


