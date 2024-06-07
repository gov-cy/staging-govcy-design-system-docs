---
"title" : "Details"
date: 2022-02-01 00:01:01Z
---
Make it easier for the users to scan the page, by letting them reveal more detailed information only if they need it.
## When to use this component
Use the details component to make a page easier to scan when it contains information that only some users will need.

## When not to use this component
Do not use the details component to hide information that the majority of your users will need.

> **Warning**{class="govcy-fw-bolder govcy-fs-4 govcy-d-block"}
> Details work best for simple content and links. Do not use it to split up or hide a series of ==questions==. Use separate pages instead. See the ==Structuring a service== pattern for more information.
{class="govcy-alert-notification govcy-p-4 govcy-mb-6 govcy-br-5 govcy-br-info"}

## Decide between using details, accordions and tabs
Details, ==accordions==, and ==tabs== all hide sections of content which a user can choose to reveal.

Use the details component instead of tabs or an accordion if you only have 1 section of content.

The details component is less visually prominent than tabs and accordions, so tends to work better for content which is not as important to users.

## How it works
The component should only exist in the [main section](../../getting-started/page-template/#sections). 

The details component is a short link that shows more detailed help text when a user clicks on it.

Make the link text short and descriptive so users can quickly work out if they need to click on it.

You can use the HTML below to create a select component.

*Example*
<div class="govcy-container govcy-p-4 govcy-br-1 govcy-br-standard govcy-mb-4">
<details class="govcy-details">
    <summary class="govcy-details__summary">
        <span class="govcy-details__summary-text">How to control cookies</span>
    </summary>
    <p class="govcy-details__text">
        You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
    </p>
</details>
</div>

*HTML code*
```html
<details class="govcy-details">
    <summary class="govcy-details__summary">
        <span class="govcy-details__summary-text">How to control cookies</span>
    </summary>
    <p class="govcy-details__text">
        You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
    </p>
</details>
```
### Write clear link text
Make the link text short and descriptive so users can quickly work out if they need to click on it.