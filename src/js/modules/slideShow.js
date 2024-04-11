import $ from 'jquery';


export const gallerySlideShow = $(() => {
    const galleryImage = $(".header-img").find("img").first();
    const overlay = $(".slideshow-overlay");
    const overlayTitle = $(".slideshow-overlay-title");
    const overlayParagraph = $(".slideshow-overlay-paragraph");
    
    const gallery = [
        'images/iskra-photography-paisagem1-md-unsplash.jpg',
        'images/bailey-zindel-paisagem2-md-unsplash.jpg',
        'images/mark-harpur-paisagem3-md-unsplash.jpg'
    ];

    const overlayHeading = [
        'Slide 1',
        'Slide 2',
        'Slide 3'
    ];

    const overlayText = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Fuga, molestias porro asperiores, modi dolor sed in, nihil tenetur adipisci aut dolore?',
        'Quibusdam culpa et quisquam corporis rem accusamus facilis debitis?'
    ]
    
    
    let i = 0;
    setInterval(function() {
        iterateArray(gallery);
        overlay.fadeOut();
        overlayTitle.fadeOut();
        overlayParagraph.fadeOut();
        galleryImage.fadeOut(function(){
          $(this).attr("src", gallery[i]);
          $(this).fadeIn();
          overlay.fadeIn();
          overlayTitle.text(overlayHeading[i]).fadeIn();
          overlayParagraph.text(overlayText[i]).fadeIn();
        })
    }, 4000);

    function iterateArray (arr) {
       return i = (i + 1) % arr.length;
    }
})