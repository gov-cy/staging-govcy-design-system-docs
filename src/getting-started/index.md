---
title: "Get Started"
order: 1
tags : ['top_menu']
date: 2022-02-01 00:00:01Z
---

## Principles
When designing and implementing websites and services throughout gov.cy, consider the [design system principles](principles/)

## How to design a service
If you are implementing a service, start with the ==Structing a service== pattern to understand basic structure of a service. 
## How to design pages of a service
To design pages that are part of a service, we prefer to use ==questions== and split them across multiple pages with each page containing just one thing.  
### Mandatory elements
Make sure to use the ==page template== for the ==head== (including the ==manifest.json==) and the ==body== sections , use one of the ==layouts== in the `main` area and include at least, the following mandatory elements in the ==correct order==:
- ==skip link==
- ==header== component
- ==username== component when needed
- ==back== or ==breadcrumbs== components
- ==page title (header `<h1>`)==
- ==footer== component

![Mandatory elements illustration](../../img/v3_mandatory_elemenets.png)

Additionally, make sure that to comply with the following design values:
- ==max width== 
- ==responsive breakpoint==
- ==vertical spacing==
- ==grid and gutter==
- ==typography== 
- ==colours==

Also make sure to follow the guidance for ==focus state== and if displaying validation errors to use the ==error summary== together with the ==error message== components.

For any other design element, use the ==components== and ==patterns== of the design system. 

If you decide to opt for different designs than the ones specified in the design system, make sure to back your decisions with evidence how the existing designs fail, how the new  designs benefit the users and how they align the ==principles== of the design system.  

## Developing with gov.cy CSS
Code examples exist throughout the documentation that utilize the gov.cy CSS and JavasScript (developer assets) to create various design elements. To get started in developing websites and services using the developer assets: 
- Get the ==gov.cy developer assets==
- Use the ==page template== 
- Select and use one of the ==layouts== for main section
- Use code for ==components== and ==patters==

Take a look at our ==create a page== guide for complete example.

## Design prototyping and testing libraries
You can use the same libraries our team uses for:
- ==Design and prototyping==
- ==Testing==

## Accessibility
It is important to always test your implementation for compliance with the EN 301 549 Standard.

All elements presented in the design system documentation, have been tested and they comply with the [include everyone principle]({{ '/getting-started/principles/#7.-include-everyone' | url }}). However, that does not mean that any implementation that uses the developer assets, automatically complies with the Standard.

The way the design elements are used affect the accessibility of each page. For example [The order of heading elements](https://webdesign.tutsplus.com/articles/the-importance-of-heading-levels-for-assistive-technology--cms-31753){target="_blank"} should descend, based on the “depth” of the content and as such a `h4` element should not appear on a page before the first `h3` element declaration.

Be extra careful when including components within other components, when you are overwriting the default appearance of elements, or when you are implementing custom elements. 

