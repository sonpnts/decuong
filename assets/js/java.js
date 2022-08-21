$(document).ready(function(){
    
    const $$ = document.querySelector.bind(document);
    const $$$ = document.querySelectorAll.bind(document);

    const tabs = $$$(".tab-item");
    const panes = $$$(".tab-pane");

    const tabActive = $$(".tab-item.active");
    const line = $$(".tabs .line");

    requestIdleCallback(function () {
        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";
    });

    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
        $$(".tab-item.active").classList.remove("active");
        $$(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
        };
    });

    $(".animate__animated").hover(function(){
        $(this).addClass("animate__bounce");
    }, function(){
        $(this).removeClass("animate__bounce");
    })
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".backtop").fadeIn();
        }else{
            $(".backtop").fadeOut();
        }
    })
    $(".backtop").click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".menu-scroll").fadeIn();
            $("#header").fadeOut();
        }else{
            $(".menu-scroll").fadeOut();
            $("#header").fadeIn();
        }
    })
});