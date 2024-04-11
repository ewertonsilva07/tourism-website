import $ from 'jquery';

export const toggleHamburgerMenu = $(() => {
    const navContainer = $(".nav-list-container");
    const hamburgerIcon = $(".menu");
    let isHidden = true;

    hamburgerIcon.on("click", function() {
            const topLine = $('.menu-line-1');
            const middleLine = $('.menu-line-2');
            const bottomLine = $('.menu-line-3');
            if(isHidden){
                navContainer.slideDown(500);
                isHidden = false;
                hamburgerIcon.css({
                    "position":"fixed",
                    "transform": "rotateZ(90deg)",               
                    "transition":"all .8s"
                });
                topLine.css({
                    "transform":"rotateZ(-40deg)",
                    "transform-origin":"right",
                    "transition":"transform .8s"
                });
                middleLine.css({
                    "opacity":"0",
                    "visibility":"hidden",
                    "transition":"all .5s"
                });
                bottomLine.css({
                    "transform":"rotateZ(40deg)",
                    "transform-origin":"right",
                    "transition":"transform .8s"
                });
            } else {
                navContainer.slideUp(500);
                isHidden = true;
                hamburgerIcon.css({
                    "position":"absolute",
                    "transform": "rotateZ(0deg)", 
                    "transition":"all .8s"
                });
                topLine.css({
                    "transform":"rotateZ(0deg)",
                    "transform-origin":"right",
                    "transition":"transform .8s"
                });
                middleLine.css({
                    "opacity":"1",
                    "visibility":"visible",
                    "transition":"all .8s"
                });
                bottomLine.css({
                    "transform":"rotateZ(0deg)",
                    "transform-origin":"right",
                    "transition":"transform .8s"
                });
            }
    })

})