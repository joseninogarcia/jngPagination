
/*
    jngPagingation by Jose Nino N. Garcia
    Date Created: July 21, 2014
    Version: 1
    Description: 
        jngPagination simply known as Data Pagination is controlling the number of contents in a certain web page. 
        This helps to minimize the amount of data that should be visible into the users. This plugin was created
        to make sure all of the dynamic websites that has several data's can be controlled over this plugin.
*/

(function ($) {

    $.fn.jngPlugin = function (options) {
        this.find("tr").hide();
        var $this = $(this);
        var elementz = this.find("tr");

        var jngSettings = $.extend({
            itemsInPage: 5,
            pagingIdentifierLinks: "#paging a",
            parentIdentifier: "#paging",
            pageNumberDetail: "#number"
        }, options);

        var itemsPerPage = jngSettings.itemsInPage;
        var pageLimit = $.fn.jngPlugin.count(this.find("tr"));
        var ceiled = pageLimit / itemsPerPage;

        //Roll the Paging
        $.fn.jngPlugin.PagingAppend(jngSettings.parentIdentifier, ceiled, pageLimit);

        //Hide all the elements then show the others 
        for (var i = 0; i < itemsPerPage; i++) {
            this.find("tr:nth-child(" + (i + 1) + ")").show();
        }

        var rangValueTwo = $(jngSettings.pagingIdentifierLinks).index(this);

        $(jngSettings.pagingIdentifierLinks).click(function () {

            $(jngSettings.pagingIdentifierLinks).removeClass("jngCurrent");
            elementz.hide();
            var index = $(jngSettings.pagingIdentifierLinks).index(this);
            var rangeVal = itemsPerPage * (index + 1);
            var initVal = "";
            var initialValue = 1;
            var leftValue = (itemsPerPage * ((index + 1) - 1));
            var i, j;
            var indexAdded = index + 1;

            if (leftValue == 0) {
                for (i = leftValue; i < rangeVal; i++) {
                    $this.find("tr:nth-child(" + (i + 1) + ")").fadeIn();
                }

            } else {
                for (j = leftValue; j < rangeVal; j++) {
                    $this.find("tr:nth-child(" + (j + 1) + ")").fadeIn();
                }
            }

            $(jngSettings.parentIdentifier).find("li:nth-child(" + (index + 1) + ")").addClass("jngCurrent");

            //Give the page number detail of the user.
            $(jngSettings.pageNumberDetail).html(indexAdded);
        });

       $(jngSettings.parentIdentifier).each(function () {
            var foo = $(this);
            $(this).append('');
            $(this).find('li:gt(4)').hide();
            $(this).find('.jngNext').click(function () {
                var last = $('ul', foo).children('li:visible:last');
                last.nextAll(':lt(5)').show();
                last.next().prevAll().hide();
            });
            $(this).find('.jngPrevious').click(function () {
                var first = $('ul',foo).children('li:visible:first');
                first.prevAll(':lt(5)').show();
                first.prev().nextAll().hide()
            });
        });

        return this;
    }

    $.fn.jngPlugin.count = function (exem) {
        return exem.length;
    }

    $.fn.jngPlugin.hideElement = function (elem) {
        elem.hide();
    }

    $.fn.jngPlugin.getElement = function (param) {
        this.find("tr:nth-child(" + param + ")").show();
    }

    $.fn.jngPlugin.PagingAppend = function (elem, ceiled, pageLimit) 
    {
        for (var i = 0; i < ceiled; i++) {
            $("<li></li>").html(i + 1).appendTo(elem + " ul");
        }
    }

} (jQuery));

