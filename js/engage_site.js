var engagePage = engagePage || {};

(function ($) {
    engagePage.init = function () {
        var dialog = $(".dialog");
        
        var player = fluid.videoPlayer(".videoPlayer", {
            sources: [
                {
                    src: "media/engage-demo-mobile.mp4",
                    type: "video/mp4"
                },
                {
                    src: "media/engage-demo-mobile.ogv",
                    type: "video/ogg"
                }
            ]
        }); 
        
        dialog.dialog({
            autoOpen: false, 
            modal: true,
            width: 320,
            title: "Engage Demo: Mobile"
        });
        
        $(".screencast").click(function(){
            dialog.dialog("open");
        });
        
        dialog.bind('dialogclose', function() {
            player.pause();
        });
     
    };
})(jQuery);
