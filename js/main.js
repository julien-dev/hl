$(document).on('pagebeforeshow', '#epr', function(){
    var player = videojs('really-cool-video-epr', { /* Options */ }, function() {
        var self = this ;
        $("video").click(function(){
            self.play(); // if you don't trust autoplay for some reason
        });
    });
});
$(document).on('pagebeforeshow', '#hl', function(){
    var player = videojs('really-cool-video-hl', { /* Options */ }, function() {
        var self = this ;
        $("video").click(function(){
            self.play(); // if you don't trust autoplay for some reason
        });
    });
});