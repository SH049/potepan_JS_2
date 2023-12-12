$(document).ready(function() {
    const $button = $('.button');
    const $result = $('#result')


    $button.on("click", function(){
        $result.text($(this).text());
    })
});