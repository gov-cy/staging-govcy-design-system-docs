---
title: "Cookie banner"
date: 2022-02-01 00:01:01Z
description: "Allow users to accept or reject cookies which are not essential to making your service work."
---

Allow users to accept or reject cookies which are not essential to making your service work.

## When to use this component
Use this component if your service sets any cookies on a user’s device.

## When not to use this component
You can choose not to have a cookie banner if the service only sets essential or ‘strictly necessary’ cookies, as these do not need user consent.

However, you must tell users that you set essential cookies. You can do this with a ==cookies page== – link to this page in the footer.

## How it works
The component should only exist in the [before start section](../../getting-started/page-template/#sections), after the skip to main content link.  

This cookie banner and the ==cookies page pattern== are used together to getting cookie consent used on a site or service.

Include the name of the service in the banner heading to help users understand that the cookies you’re talking about are different from the ones set by the main gov.cy platform, or a different site or service.

Show the cookie banner every time the user accesses your service until they either:

- accept or reject cookies using the buttons in the cookie banner
- save their cookie preferences on the service’s ==cookies page==

*Example*
<div class="govcy-container govcy-p-4 govcy-br-1 govcy-br-standard govcy-mb-4">
<div class="govcy-cookie-consent-banner">
    <div class="govcy-container">
        <h3 data-toc-exclude>Cookies on [service or site name]</h3>
        <p>We use some essential cookies to make this website work.</p>
        <p>We may place these for analysis of our visitor data, to improve our website, show personalized content and to give you a great website experience. For more information about the cookies we use open the settings.</p>
        <div class="govcy-d-flex govcy-align-items-center">
            <a href="#" class="govcy-btn-primary me-2">Accept cookies</a>
            <a href="#" class="govcy-btn-primary me-2">Reject cookies</a>
            <a href="#">Adjust cookies</a>
        </div>
    </div>
</div>
</div>

*HTML code*
```html
<div class="govcy-cookie-consent-banner">
    <div class="govcy-container">
        <h3>Cookies on [service or site name]</h3>
        <p>We use some essential cookies to make this website work.</p>
        <p>We may place these for analysis of our visitor data, to improve our website, show personalized content and to give you a great website experience. For more information about the cookies we use open the settings.</p>
        <div class="govcy-d-flex govcy-align-items-center">
            <a href="#" class="govcy-btn-primary me-2">Accept cookies</a>
            <a href="#" class="govcy-btn-primary me-2">Reject cookies</a>
            <a href="#">Adjust cookies</a>
        </div>
    </div>
</div>
```

The link 'Adjust cookies' should lead to the ==cookies page== where the user can adjust the cookies. 

Once the user has accepted or rejected cookies, the cookie banner should:

- hide the cookie banner message
- set a cookie to save the user’s preferences for 1 year

Make sure the cookie banner does not:

- show when the user visits again, once their preferences have been saved
- set any non-essential cookies unless the user accepted them on a previous visit

## Accessibility
Make sure:
- not to make the cookie banner ‘sticky’ to the top of the page by using `position: fixed` or any other method