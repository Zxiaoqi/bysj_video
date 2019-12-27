/*将搜索输入框置顶*/
    (function($) {
        $.fn.fixDiv = function(options) {
            var defaultVal = {
                top : 10
            };
            var obj = $.extend(defaultVal, options);
            $this = this;
            var _top = $this.offset().top;
//          var _left = $this.offset().left;
            $(window).scroll(function() {
                var _currentTop = $this.offset().top;
                var _scrollTop = $(document).scrollTop();
                if (_scrollTop > _top) {
                    $this.offset({
                        top : _scrollTop + obj.top,
//                      left : _left
                    });
                } else {
                    $this.offset({
                        top : _top,
//                      left : _left
                    });
                }
            });
            return $this;
        }
    })(jQuery);