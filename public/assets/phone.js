/**
 * Created by joelsaxton on 2/25/15.
 */
$(document).ready(function(){
    var num = '';
    $('.button').on('click', function() {

        switch($(this).attr('value')) {
            case '#':
                num = '';
                $('#results').html('RESULTS:');
                break;
            case "0":
            case "1":
            case "*":
                break;
            default:
                num += $(this).attr('value');
                $.get( "api/WordCombinations/?word=" + num, function( data ) {
                    $('#results').html('RESULTS for ' + num + ': ' + data.toString());
                });
                break;
        }
    });

    $('.button').on('mouseover', function(){
        $(this).css('background', 'lightblue');
    });
    $('.button').on('mouseout', function(){
        $(this).css('background', 'blue');
    });
});