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

Below explains the setting for you to change:

-**itemsInPage** - Number of items you want to show in your web page.

-**pagingIdentifierLinks** - I just called it Identifier Links but I think it's too far from the original name. But his setting is used to place the numbers of pagination like 1 2 3 4 5 6 

-**parentIdentifier** - This is where are you going to place your pagination.

-**pageNuberDetail** - This displays on what page are you, but you also have the option for you to put it on your web page or not. 

And for your HTML:

```
<table id="myContent" width="100%" cellpadding="0" cellspacing="0">
    <thead>
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Middle Initial</th>
            <th>Address</th>
            <th>Telephone Number</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Jose Nino</td>
            <td>Garcia</td>
            <td>N.</td>
            <td>Philippines</td>
            <td>0832437284</td>
        </tr>
        <tr>
            <td>Mildred</td>
            <td>Mendoza</td>
            <td>N.</td>
            <td>Philippines</td>
            <td>0832437284</td>
        </tr><tr>
            <td>Oliver</td>
            <td>Mamatic</td>
            <td>N.</td>
            <td>Philippines</td>
            <td>0832437284</td>
        </tr>
        <tr>
            <td>Jelo</td>
            <td>Pasiolan</td>
            <td>N.</td>
            <td>Philippines</td>
            <td>0832437284</td>
        </tr>
        <tr>
            <td>Are Lorenz</td>
            <td>Bergonia</td>
            <td>N.</td>
            <td>Philippines</td>
            <td>0832437284</td>
        </tr>
</tbody>
</table>
```

##Version Number

This is version 1, there are still upcoming updates on this plugin. If you have any comments or suggestions, you can e-mail me at joseninogarcia@gmail.com

