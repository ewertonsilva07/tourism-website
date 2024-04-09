import $ from 'jquery';

export const hamburguerMenu = $(() => {
    const navContainer = $(".nav-list-container");
    const hamburgerIcon = $(".menu");
    let isHidden = true;

    hamburgerIcon.on("click", function() {
        // navContainer.toggle(function() {
            if(isHidden){
                navContainer.slideDown(500);
                isHidden = false;
                hamburgerIcon.css({
                    "position":"fixed",
                    "transform": "rotateZ(90deg)",               
                    "transition":"all .8s"
                })
            } else {
                navContainer.slideUp(500);
                isHidden = true;
                hamburgerIcon.css({
                    "position":"absolute",
                    "transform": "rotateZ(0deg)", 
                    "transition":"all .8s"
                });
            }
        // });
    })

})