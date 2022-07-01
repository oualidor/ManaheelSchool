$(document).ready(function(){
    $('.tlt').textillate({
        minDisplayTime: 1500,
        in: { effect: 'flipInX', sync: true },
        out :{  delay: 1, effect: 'tada', sync: true},
        loop: true
    });
});
