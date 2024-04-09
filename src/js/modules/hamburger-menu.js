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
                hamburgerIcon.css("position","fixed");
            } else {
                hamburgerIcon.prop("style", false);
                navContainer.slideUp(500);
                isHidden = true;
            }
        // });
    })

})