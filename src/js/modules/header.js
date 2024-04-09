import $ from 'jquery';


export const gallerySlideShow = $(() => {
    const galleryImage = $(".header-img").find("img").first();

    const gallery = [
        'images/iskra-photography-paisagem1-md-unsplash.jpg',
        'images/bailey-zindel-paisagem2-md-unsplash.jpg',
        'images/mark-harpur-paisagem3-md-unsplash.jpg'
    ]
    

    let i = 0;
    setInterval(function() {
        i = (i + 1) % gallery.length;
        galleryImage.fadeOut(function(){
          $(this).attr("src", gallery[i]);
          $(this).fadeIn();
        })
    }, 4000);
})