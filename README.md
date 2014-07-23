##Description

jngPagination plugin is used to control the number of queries that was exposed to the web pages. This plugin divides the pages based on the number of items you required. This plugin is suitable for people who has a large scale of data that they need to query and shut down the instances of scrolling pages just to see what they are looking for. 

##Getting Started

There are few settings that user can modify on the plugin. You'll have chances to changed whatever you want based on the limited settings I used to placed on the example page. 

##Installation

Before you initialize the plugin, first you need to placed this snippets of codes into your header

```
<script type="text/javascript" language="javascript" src="js/jquery-1.11.1.js"></script>
<script type="text/javascript" language="javascript" src="js/jngPaging.js"></script>
```

As well as for the style

```
<link rel="Stylesheet" type="text/css" href="css/jngPagination.css" />
```

After that, placed this code for you to start initialize the plugin

```

$(document).ready(function () {
    $(selector).jngPlugin({
        itemsInPage: 10, //number of pages
        pagingIdentifierLinks: "#pagingToll li", // ID of the pagination
        parentIdentifier: "#pagingToll", //Parent ID
        pageNumberDetail: "#pageNum" // page detail
    });
});

```
