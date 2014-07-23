
//jQuery Plugin
//Author: Jose Nino Garcia
//Makati City Philippines


(function ($) {
    $.fn.greenify = function (options) {
        var settings = $.extend({
            color: "#556b3f",
            backgroundColor: "white"
        }, options);

        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    }

    $.ltrim = function (str) {
        return str.replace(/^\s+/, "");
    };

    $.rtrim = function (str) {
        return str.replace(/\s+$/, "");
    };

    $.fn.openPopup = function () {
        //open popup code
    }

    $.fn.closePopup = function () {
        //close popup code
    }

    $.fn.popup = function (action) {

        if (action === "open") {

        }

        if (action === "close") {

        }

    }

    $.fn.countNum = function () {
        return this.each(function () {

        });
    }

    $.fn.showLinkLocation = function () {
        this.filter("a").each(function () {
            var link = $(this);
            link.append("(" + link.attr("href") + ")");
        });

        return this;
    }

    $.fn.hilight = function (options) {
        var opts = $.extend({}, $.fn.hilight.defaults, options);
    }

    $.fn.hilight.defaults = {
        foreground: "red",
        background: "yellow"
    };

    $.fn.highlights = function (options) {
        return this.each(function () {
            var elem = $(this);
            var markup = elem.html();

            markup = $.fn.highlights.format(markup);
            elem.html(markup);
        });
    };

    $.fn.highlights.format = function (txt) {
        return "<strong>" + txt + "</strong>";
    };

} (jQuery));