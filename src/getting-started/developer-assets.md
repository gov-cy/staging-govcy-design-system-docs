---
title: "Developer assets"
date: 2022-02-01 00:00:03Z
--- 
The easiest way to get stated is to download the ==gov.cy starter kit==, unzip it and include it in your project. ==(Last updated: 17/10/2023)==

Content:
```html
.
+-- css
|   +-- govcy.uds.css
+-- images
|   +-- ...
+-- JS
|   +-- govcy.uds.js
|   +-- locales
|       +-- govcy.datepicker.el.js
|       +-- govcy.datepicker.en.js
+-- manifest.json+-- sample.html
```

## CSS
To add the gov.cy styles using our developer assets, use the pre-built ==`govcy.uds.min.css`== css file. Just include the following code in your `<head>`.

```html
<!-- CSS -->
<link href="css/govcy.uds.min.css" rel="stylesheet" >
```

Alternatively you can use jsdelivr CDN by including the following code in your `<head>`.

==Change accordingly==
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system@v2.1.1/dist/css/main.min.css" integrity="sha384-F+ky8v3AaxUWgO4Q36KXarGEFx5YNCparZr/q7m9S7yMVbvBdIJ9Bw0P9gFmw87r" crossorigin="anonymous">
```

## JavaScript
Many of our components require the use of JavaScript to function. Place the following `<script>` near the end of your pages, right before the closing `</body>` tag, to enable them.

```html
<!-- scripts -->
<script src="js/govcy.uds.min.js" type="text/javascript"></script>
```

Alternatively you can use jsdelivr CDN by including the following.

==Change accordingly==
```html
<!-- scripts -->
<script src="https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system@v2.1.1/dist/js/app.min.js" integrity="sha384-xv0o+su1i+C0o4fYwrsX+q0dhbhj/IsZscMn7qvrt49Wboy+TIWT0GlfyiW39aH/" crossorigin="anonymous"></script>
```

All HTML code examples in this documentation utilizes the classes, styling and behaviour defined in this CSS and JS files of our developer assets.

**NOTE:** if the location or filenames of your CSS or JS are different, please adjust the code accordingly.

Use the ==stater template==
## Styles, components and patterns 
To implement ==styles==, ==components== and ==patterns== using the developer assets, use the ==starter template== and the code included in each documentation page through this website.

To get stated in creating a page, take a look at out ==create a page== guide. 