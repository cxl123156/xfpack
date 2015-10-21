;(function ($, window, document, undefined) {

    var pluginName = "metisMenu",
        defaults = {
            toggle: true
        };
        
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {

            var $this = $(this.element),
                $toggle = this.settings.toggle;
            var temp = 0;

            $this.find('li.active').has('ul').children('ul').addClass('collapse in');
            
            $this.find('li').not('.active').has('ul').children('ul').addClass('collapse');


            $this.find('li').has('ul').children('a').on('click', function (e) {

                e.preventDefault();
                //$(this).parent('li').toggleClass('active').children('ul').collapse('toggle');      //modify by chenxianglin
                $(this).parent('li').children('ul').collapse('toggle');

                if ($toggle) {                          //modify by chenxianglin
                    $(this).parent('li').siblings().removeClass('active').children('ul.in').collapse('hide');

                }

                // $this.find('li.active').has('ul').children('ul').addClass('collapse in');
                // $this.find('li').not('.active').has('ul').children('ul').addClass('collapse');
            });

            $this.find('li').has('ul').children('ul').on('show.bs.collapse',function(){
                $(this).parent('li').children('a').children('span').not('.menu-title').removeClass('fa-angle-left');
                $(this).parent('li').children('a').children('span').not('.menu-title').addClass('fa-angle-down');
            });
            $this.find('li').has('ul').children('ul').on('hide.bs.collapse',function(){
                $(this).parent('li').children('a').children('span').not('.menu-title').removeClass('fa-angle-down');
                $(this).parent('li').children('a').children('span').not('.menu-title').addClass('fa-angle-left');
            });
        }
    };

    $.fn[ pluginName ] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
