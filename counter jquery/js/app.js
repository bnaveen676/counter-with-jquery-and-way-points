//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

// start counters
class Counters {
    counter(data) {
        let counterValue = data.counterStart;
        $(data.counterEle).each((ind, counter) => {
            let counterUp = () => {
                let targetValue = +$(counter).attr(data.atrName);
                counterValue++;
                if (counterValue < targetValue) {
                    $(counter).html(counterValue);
                    setTimeout(counterUp, 10)
                } else {
                    $(counter).html(targetValue);
                }
            }
            counterUp();
        });
    }
}
// end counters

// dom content is loaded
$(() => {
    $(".counters").waypoint({
        handler: function() {
            // do something
            const counterCls = new Counters;
            counterCls.counter({
                counterEle: '.counter',
                counterStart: 0,
                atrName: 'data-target'
            });
            this.destroy();
        },
        offset: 'bottom-in-view'
    })
});

;