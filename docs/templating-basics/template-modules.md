---
sidebar_position: 5
---

# Modules
While you can surely use templates which contain simple content, the real power of using a templating system is the ability to use custom variables and methods within the template content.

## Built-in Modules (variables and methods)
np.Templating includes a suite of built-in modules which are organized to provide groups of variables and methods.

The following is a quick overview of all the included modules, for more details visit the _TODO:linkToModules_ section.

### Date Module
Date Module _TODO:linkToDateModulePage_ contains every internal variable / method related to dates.

### Frontmatter Module
Frontmatter Module _TODO:linkToFrontmatterModulePage_ exposes all the frontmatter variables of a file as internal variables.

### Note Module
Note Module _TODO:linkToNoteModulePage_ exposes methods for obtaining information about your notes

### System Module
Sytem Module _TODO:linkToSystemModulePage_ exposes methods for perform system level functions

### Time Module
Time Module _TODO:linkToTimeModulePage_ contains every internal variable / method related to time values.

### Utility Module
Utility Module _TODO:linkToUtilityModulePage_ contains a number of utility functions which can be used in your tempaltes

### Web Module
Web Module _TODO:linkToWebModulePage_ contains every internal variable / method related to the web (using web requests).

np.Templating doesn't escape characters by default. When doing web requests, it may be useful to escape dangerous characters. You can escape a command's response characters using the <%- opening tag. More informations here.
