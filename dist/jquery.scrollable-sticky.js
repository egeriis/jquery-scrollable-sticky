/*
 *  jQuery Scrollable Sticky - v0.1.0
 *  A jQuery plugin which enables fixed positioned elements, that are higher than the viewport, to be scrolled.
 *  https://github.com/egeriis/jquery-scrollable-sticky/
 *
 *  Made by Ronni Egeriis Persson
 *  Under MIT License
 */
;(function($, window, document, undefined) {

    var pluginName = 'scrollableSticky',
        defaults = {
            offset: 0
        };

    function Plugin(el, options) {
        this.el = el;
        this.$el = $(el);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function()
        {
            this.offset = this.$el.offset();
            this.parentsOffset = this.$el.offsetParent().offset();
            this.offsetParent = {
                top: this.offset.top - this.parentsOffset.top,
                left: this.offset.left - this.parentsOffset.left
            };
            this.dimensions = {
                width: this.$el.width(),
                height: this.$el.height()
            };
            this.scrollTop = 0;
            this.adjustmentStart = 0;
            $(window).scroll($.proxy(this.onScroll, this));
            this.placeElement();
        },
        placeElement: function()
        {
            this.$el
                .css({
                    position: 'absolute',
                    top: this.offsetParent.top,
                    left: this.offsetParent.left,
                    width: this.dimensions.width
                });
        },
        placeElementFixed: function(top)
        {
            this.$el
                .css({
                    position: 'fixed',
                    top: top || this.offset.top,
                    left: this.offset.left
                });
        },
        onScroll: function()
        {
            var windowHeight = $(window).height(),
                scrollTop = $(window).scrollTop();

            if (windowHeight > this.dimensions.height) {
                return this.placeElementFixed();
            }

            // adjustmentHeight is the scrollable height of our element
            var adjustmentHeight = this.dimensions.height - windowHeight + this.offset.top + this.settings.offset,
                adjustment = 0;

            // If adjustmentStart is specified, user has started scrolling backwards
            if (this.adjustmentStart > 0) {
                // adjustment is a calculation of the bottom offset for our element
                adjustment = this.adjustmentStart - scrollTop;

                // When adjustment reaches zero the user has reached the top
                if (adjustment < 0) {
                    // Reset adjustmentStart
                    this.adjustmentStart = 0;
                } else if (adjustment > adjustmentHeight) {
                    this.adjustmentStart = scrollTop + adjustmentHeight;
                }
            // If a user is scrolling backwards we set adjustmentStart
            } else if (scrollTop < this.scrollTop) {
                this.adjustmentStart = scrollTop;
            }

            // If are about to scroll beyond the bottom of the element
            // it should be fixed to the bottom of the browser window
            if (scrollTop > adjustmentHeight - adjustment)
            {
                var top = adjustmentHeight * -1 + this.offset.top;
                if (adjustment >= 0) {
                    top += Math.min(adjustment, adjustmentHeight);
                }
                this.placeElementFixed(top);
            }
            else
            {
                this.adjustmentStart = 0;
                this.placeElement();
            }

            this.scrollTop = scrollTop;
        }
    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if ( ! $.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

})(jQuery, window, document);