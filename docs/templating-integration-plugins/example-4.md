---
sidebar_position: 4
---

# Example 4: Full Example
In this example, we will show a more complex method (taken from personal daily note command)

*****
In this example, I have a custom plugin `codedungeon.NotePlan` which contains a number of commands, one of which is called `cdWeekday` which I invoke each day in my NotePlan Daily Note.  There is quite a bit to this command, I will try to unpack every that is happening.

```js
import NPTemplating from 'NPTemplating'

export async function cdWeekday(userDate: any = ''): Promise<void> {
  try {
    const content: string = Editor.content || ''
    Editor.insertTextAtCursor('Please wait...')

    let pivotDate = userDate.length === 0 ? await cdGetSelectedCalendarDate() : userDate
    pivotDate = moment(pivotDate).format('MM/DD/YYYY')
    const templateData = {
      data: {
        pivotDate,
        yesterday: moment(pivotDate).subtract(1, 'days').format('YYYY-MM-DD'),
        today: moment(pivotDate).format('YYYY-MM-DD'),
        tomorrow: moment(pivotDate).add(1, 'days').format('YYYY-MM-DD'),
      },
      methods: {
        handleRetrospect: async () => {
          if (new Date(pivotDate).getDay() === 5) {
            const retrospectNote = new DateModule().weekOf(moment(pivotDate).format('YYYY-MM-DD'))
            const retroData = { ...templateData, retroMeetingDate: templateData.data.today }
            await createRetrospectNote(retrospectNote, retroData)

            // $FlowFixMe
            return `\n#### 🗓 3:00 PM - 4:00 PM - Retrospect\n- [[${retrospectNote}]]\n`
          }
        },
      },
    }

    const result = await NPTemplating.renderTemplate('Weekday Overview', templateData)

    // create Standup Note
    await cdStandup(pivotDate)

    Editor.replaceTextInCharacterRange(content + result, 0, 16384)
    Editor.highlightByIndex(0, 0)
  } catch (error) {
    cdLogError('cdWeekday', error)
  }
}

```

#### Weekday Overview Template

```markdown
# Weekday Overview
*****
# <%= date.format('ddd, MMM DD, YYYY', `${np.pivotDate}`) %>
*****
## 📚 Overview

> ☀️ <%- web.weather() %>
> 🙆 “<%- web.advice() %>”
> 🗣 “<%- web.affirmation() %>”

*****
## ✅ Important Tasks
*Note: These are the most important task for the day (procured from even review and morning preview.  All Important Tasks from yesterday should be moved today and ranked accordingly.*

*****
## 📌 Daily Goals
*Top priorities for the day*

* OmniFocus [Inbox](omnifocus:///inbox) [Today](omnifocus:///perspective/Today)
* Things [Inbox](things:///show?id=inbox) [Today](things:///show?id=today)

*****
## 📝 Notes
*Daily overview of important notes*

*****
## 🎧 Focused

#### ☕️ 5:00 AM - 6:00 AM - Planning & Solitude
<%- Bible.verse() %>

#### 🧭 6:00 AM - 9:30 AM
- Follow-up Email, Slack, etc.
- Prepare for [[<%= date.format('YYYY-MM-DD', `${np.pivotDate}`) %> Standup]]

#### 🧭 9:30 AM - 10:00 AM - Standup
- [[<%= date.format('YYYY-MM-DD', `${np.pivotDate}`) %> Standup]]
> 🗣 “<%- web.affirmation() %>”

#### 🧭 10:00 AM - 1:00 PM
🍅 Schedule 3 Pomos

#### 🍴 1:00 PM - 2:00 PM - Mental Break / Lunch
🍱 Lunch
<%- await handleRetrospect() %>
#### 🏁 5:00 PM - 5:30 PM — Shutdown
📌 EOD Tasks

*****
## 🔖 Review
*Daily review, provide a summary of what was accomplished and what open items need to be carried over to tomorrow*

* Review emails and comment / allocate anything JIRA

**📕 Tomorrow:** [[<%= np.tomorrow %>]]

```

Would produce the following output when the custom command is invoked on 2021-12-31

```markdown
# Fri, Dec 31, 2021
*****
## 📚 Overview

> ☀️ Fountain Valley, California, United States: ☀️ +58°F
> 🙆 “For every complex problem there is an answer that is clear, simple, and wrong.”
> 🗣 “You're a smart cookie”

*****
## ✅ Important Tasks
*Note: These are the most important task for the day (procured from even review and morning preview.  All Important Tasks from yesterday should be moved today and ranked accordingly.*

*****
## 📌 Daily Goals
*Top priorities for the day*

* OmniFocus [Inbox](omnifocus:///inbox) [Today](omnifocus:///perspective/Today)
* Things [Inbox](things:///show?id=inbox) [Today](things:///show?id=today)

*****
## 📝 Notes
*Daily overview of important notes*

*****
## 🎧 Focused

#### ☕️ 5:00 AM - 6:00 AM - Planning & Solitude
> 🙏🏻  Numbers 7:34
> 🗣  one male goat for a purification offering;

#### 🧭 6:00 AM - 9:30 AM
- Follow-up Email, Slack, etc.
- Prepare for [[2021-12-31 Standup]]

#### 🧭 9:30 AM - 10:00 AM - Standup
- [[2021-12-31 Standup]]
> 🗣 “You're a smart cookie”

#### 🧭 10:00 AM - 1:00 PM
🍅 Schedule 3 Pomos

#### 🍴 1:00 PM - 2:00 PM - Mental Break / Lunch
🍱 Lunch

#### 🗓 3:00 PM - 4:00 PM - Retrospect
- [[W52 (2021-12-26..2022-01-01)]]

#### 🏁 5:00 PM - 5:30 PM — Shutdown
📌 EOD Tasks

*****
## 🔖 Review
*Daily review, provide a summary of what was accomplished and what open items need to be carried over to tomorrow*

* Review emails and comment / allocate anything JIRA

**📕 Tomorrow:** [[2022-01-01]]
```

#### Template Breakdown
The breakdown of this template is as follows (for brevity, I have extracted only the lines which use template tags)

```markdown
...
3: # <%= date.format('ddd, MMM DD, YYYY', `${np.pivotDate}`) %>
...
7: > ☀️ <%- web.weather() %>
8: > 🙆 “<%- web.advice() %>”
9: > 🗣 “<%- web.affirmation() %>”
...
32: <%- await Bible.votd() %>
...
36: * Prepare for [[<%= date.format('YYYY-MM-DD', `${np.pivotDate}`) %> Standup]]
...
39: - [[<%= date.format('YYYY-MM-DD', `${np.pivotDate}`) %> Standup]]
47: <%- await handleRetrospect() %>
...
57: **📕 Tomorrow:** [[<%= np.tomorrow %>]]
```

line 3: Displays date using `DateModule.format` method, and supply the date using `data.pivotDate` variable
line 7: Displays current weather using `WebModule.weater` method
line 8: Displays daily advice using `WebModule.advice` method
Line 9: Displays daily affirmation using `WebModule.affirmation` method
Line 32: Displays personal `Bible.votd` method (Bible Plugin , verse of the day)
  - See _TODO:Templating Plugin_ section for information on creating custom np.Templating Plugins
Line 36: Task to prepare for current day "Stand Up" (internal work function)
Line 39: Time Block: Link to current day "Stand Up" note
Line 47: Creates an additional time block entry for Friday retrospect, using `handleRetrospect` method (defined in templateData.methods)
Line 57: Daily review section, link to tomorrow date
