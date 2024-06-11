---
title: "Check answers"
date: 2022-02-01 00:01:02Z
tags: "help_users"
description: "Let users check their answers before submitting information to a service."
---
Let users check their answers before submitting information to a service.

## When to use this pattern
Always allow the users to check their answers before submitting, 

Show a single check answers page immediately before the confirmation screen for small to medium-sized transactions.

When designing a very large transaction with multiple sections, it may help to include check answers pages at the end of each section. This may also be valuable for services where different users might be completing each section. You should test this approach with your users to find out if it’s helpful.  See more information on how to ==break the service into tasks and sections structure==

## How it works
Use a [summary list](../../components/summary_list/) and a [primary button](../../components/button/) in the page's [main section](../../getting-started/page-template/#sections). Note that all code examples in this page shows only the `Main` section. In a real implementation make sure to use the [govcy page template](../../getting-started/page-template/).

Check answers pages help to:
- increase users’ confidence as they can clearly see that they have completed all the sections and that their data has been captured
- reduce error rates as users are given a second chance to notice and correct errors before submitting the data

*Example*
<div class="govcy-container govcy-p-4 govcy-br-1 govcy-br-standard govcy-mb-4">
<h1>Check your answers before submitting your application</h1>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            10 March 1990
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> date of birth</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Address
        </dt>
        <dd class="govcy-summary-list-value">
            50 Enton Street<br>Nicosia<br>2066
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> address</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact details
        </dt>
        <dd class="govcy-summary-list-value">
            99123456<br/>abc@windowslive.com
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> contact details</span></a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
</div>

*HTML code*
```html
<h1>Check your answers before submitting your application</h1>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            10 March 1990
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> date of birth</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Address
        </dt>
        <dd class="govcy-summary-list-value">
            50 Enton Street<br>Nicosia<br>2066
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> address</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact details
        </dt>
        <dd class="govcy-summary-list-value">
            99123456<br/>abc@windowslive.com
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> contact details</span></a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
```

### Showing complex information 
For allowing users to check their answers on complex services, you may use the [complex information summary list variant](../../components/summary_list/#showing-complex-information)

*Example*
<div class="govcy-container govcy-p-4 govcy-br-1 govcy-br-standard govcy-mb-4">
<h1>Check your answers before submitting your application</h1>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            <a href="#">Enter date of birth</a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact telephone
        </dt>
        <dd class="govcy-summary-list-value">
            99123456
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> contact telephone</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Bank Account
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt class="govcy-summary-list-key-internal">Account name</dt>
                <dd class="govcy-summary-list-value-internal">Andreas Andreou current</dd>
                <dt class="govcy-summary-list-key-internal">Bank</dt>
                <dd class="govcy-summary-list-value-internal">Bank of Cyprus</dd>
                <dt class="govcy-summary-list-key-internal">Account number</dt>
                <dd class="govcy-summary-list-value-internal">1234567890</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> bank account</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Payments <span class="govcy-visually-hidden"> 2 entries</span>
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 1</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">10 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Electricity bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">€200</dd>
            </dl>
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 2</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">16 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Telephone bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">50</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> payments</span></a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
</div>

*HTML code*
```html
<h1>Check your answers before submitting your application</h1>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            <a href="#">Enter date of birth</a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact telephone
        </dt>
        <dd class="govcy-summary-list-value">
            99123456
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> contact telephone</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Bank Account
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt class="govcy-summary-list-key-internal">Account name</dt>
                <dd class="govcy-summary-list-value-internal">Andreas Andreou current</dd>
                <dt class="govcy-summary-list-key-internal">Bank</dt>
                <dd class="govcy-summary-list-value-internal">Bank of Cyprus</dd>
                <dt class="govcy-summary-list-key-internal">Account number</dt>
                <dd class="govcy-summary-list-value-internal">1234567890</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> bank account</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Payments <span class="govcy-visually-hidden"> 2 entries</span>
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 1</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">10 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Electricity bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">€200</dd>
            </dl>
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 2</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">16 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Telephone bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">50</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> payments</span></a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
```

Depending on the complexity of the information you may break the information into sections using an `<h2>`.

*Example*
<div class="govcy-container govcy-p-4 govcy-br-1 govcy-br-standard govcy-mb-4">
<h1>Check your answers before submitting your application</h1>
<h2 data-toc-exclude>Personal details</h2>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            10 March 1990
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> date of birth</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Address
        </dt>
        <dd class="govcy-summary-list-value">
            50 Enton Street<br>Nicosia<br>2066
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> address</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact details
        </dt>
        <dd class="govcy-summary-list-value">
            <a href="#">Enter contact details</a>
        </dd>
    </div>
</dl>
<h2 data-toc-exclude>Application details</h2>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Bank Account
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt class="govcy-summary-list-key-internal">Account name</dt>
                <dd class="govcy-summary-list-value-internal">Andreas Andreou current</dd>
                <dt class="govcy-summary-list-key-internal">Bank</dt>
                <dd class="govcy-summary-list-value-internal">Bank of Cyprus</dd>
                <dt class="govcy-summary-list-key-internal">Account number</dt>
                <dd class="govcy-summary-list-value-internal">1234567890</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> bank account</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Payments <span class="govcy-visually-hidden"> 2 entries</span>
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 1</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">10 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Electricity bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">€200</dd>
            </dl>
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 2</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">16 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Telephone bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">50</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> payments</span></a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
</div>

*HTML code*
```html
<h1>Check your answers before submitting your application</h1>
<h2>Personal details</h2>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            10 March 1990
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> date of birth</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Address
        </dt>
        <dd class="govcy-summary-list-value">
            50 Enton Street<br>Nicosia<br>2066
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> address</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact details
        </dt>
        <dd class="govcy-summary-list-value">
            <a href="#">Enter contact details</a>
        </dd>
    </div>
</dl>
<h2>Application details</h2>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Bank Account
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt class="govcy-summary-list-key-internal">Account name</dt>
                <dd class="govcy-summary-list-value-internal">Andreas Andreou current</dd>
                <dt class="govcy-summary-list-key-internal">Bank</dt>
                <dd class="govcy-summary-list-value-internal">Bank of Cyprus</dd>
                <dt class="govcy-summary-list-key-internal">Account number</dt>
                <dd class="govcy-summary-list-value-internal">1234567890</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> bank account</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Payments <span class="govcy-visually-hidden"> 2 entries</span>
        </dt>
        <dd class="govcy-summary-list-value">
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 1</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">10 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Electricity bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">€200</dd>
            </dl>
            <dl class="govcy-summary-list-row-internal">
                <dt><span class="govcy-visually-hidden">Entry 2</span></dt>
                <dt class="govcy-summary-list-key-internal">Date</dt>
                <dd class="govcy-summary-list-value-internal">16 February 2024</dd>
                <dt class="govcy-summary-list-key-internal">Description</dt>
                <dd class="govcy-summary-list-value-internal">Telephone bill payment</dd>
                <dt class="govcy-summary-list-key-internal">Amount</dt>
                <dd class="govcy-summary-list-value-internal">50</dd>
            </dl>
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> payments</span></a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
```
### Choose the right layout for the page
Many services ask users for short answers, which are suitable for a layout that takes up [two-thirds](../../styles/layout/#two-thirds-layout) of the screen on desktop devices. 

Using a two-thirds layout stops lines of text getting so long that the page becomes difficult to read. To learn more about line length, see [Layout](../../styles/layout/). It also means the action links are closer to the other content on the page. Users with screen magnifiers are less likely to miss them.

However, if your service asks users for longer or more detailed answers, a [max-width layout](../../styles/layout/#max-width-layout) may be more suitable.

### Make the page easy to understand
On your check answers page you should:

- make it clear there’s a task to perform on the page
- make it clear that the transaction will not be complete until a user confirms their information is correct
- break the content up into sections when you can
- only show sections that are relevant to users – for example, if they’ve said they’re from the Cyprus, do not show sections for questions they have not answered about locations outside of the Cyprus
- rephrase questions if you need to – for example, you do not need to label every individual line of an address, and you can rewrite long questions as shorter statements
- make sure the submit button clearly shows the action it performs – for example ‘Change your tax details’ or ‘Send your claim form’

### Let users go back and change their answers
You should provide a ‘Change’ link next to each section on your check answers page so that users can add or change the information. ‘Change’ links contain hidden text to make them accessible to screen reader users. Update the hidden text to describe what each ‘change’ link is for, for example, `<a href="">Change<span class="govcy-visually-hidden"> Personal Details</span></a>`.

The answers pages should look the same way they did when the user last used them, with all their answers pre-populated.

When they’ve finished, the ‘Continue’ button should return them to the check answers page. They should not need to go through the rest of the transaction again.

If a user changes their response in a way that means you need to ask them more questions, do this before returning them to the check answers page

### Showing errors
Always validate the users' data before submitting.

Because of the asynchronous nature of the online services, it may be possible that a user has reached the check your answers page, without completing all the steps of the service, or without meeting a business requirement.

If a user tries to submit and there is a validation or business error that prevents them from submitting, display the [error summary](../../components/error_summary/) and link the errors with the appropriate 'Change' or 'Enter' links on the summary list. 

*Example*
<div class="govcy-container govcy-p-4 govcy-br-1 govcy-br-standard govcy-mb-4">
<div class="govcy-alert-error govcy-br-5 govcy-br-danger govcy-p-3">
    <h2>There is a problem</h2>
    <p>
        <a href="#contact-details">Complete the section on your contact details</a>
        <a href="#medical-information">Complete the section on medical information</a>
    </p>
</div>
<h1>Check your answers before submitting your application</h1>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            10 March 1990
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> date of birth</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Address
        </dt>
        <dd class="govcy-summary-list-value">
            50 Enton Street<br>Nicosia<br>2066
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> address</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact details
        </dt>
        <dd class="govcy-summary-list-value">
            <a id="contact-details" href="#">Enter contact details</a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Medical information
        </dt>
        <dd class="govcy-summary-list-value">
            <a id="medical-information" href="#">Enter your medical information</a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
</div>

*HTML code*
```html
<div class="govcy-alert-error govcy-br-5 govcy-br-danger govcy-p-3">
    <h2>There is a problem</h2>
    <p>
        <a href="#contact-details">Complete the section on your contact details</a>
        <a href="#medical-information">Complete the section on medical information</a>
    </p>
</div>
<h1>Check your answers before submitting your application</h1>
<dl class="govcy-summary-list">
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Name
        </dt>
        <dd class="govcy-summary-list-value">
            Andreas Andreou
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> name</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Date of birth
        </dt>
        <dd class="govcy-summary-list-value">
            10 March 1990
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> date of birth</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Address
        </dt>
        <dd class="govcy-summary-list-value">
            50 Enton Street<br>Nicosia<br>2066
        </dd>
        <dd class="govcy-summary-list-actions">
            <a href="#">Change<span class="govcy-visually-hidden"> address</span></a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Contact details
        </dt>
        <dd class="govcy-summary-list-value">
            <a id="contact-details" href="#">Enter contact details</a>
        </dd>
    </div>
    <div class="govcy-summary-list-row">
        <dt class="govcy-summary-list-key">
            Medical information
        </dt>
        <dd class="govcy-summary-list-value">
            <a id="medical-information" href="#">Enter your medical information</a>
        </dd>
    </div>
</dl>
<button type="button" class="govcy-btn-primary">Submit</button>
```

## Accessibility
See [accessibility on summary list](../../components/summary_list/#accessibility)