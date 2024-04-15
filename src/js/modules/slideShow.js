import $ from 'jquery';


export const gallerySlideShow = $(() => {
    const galleryImage = $(".header-img").find("img").first();
    const overlay = $(".slideshow-overlay");
    const overlayTitle = $(".slideshow-overlay-title");
    const overlayParagraph = $(".slideshow-overlay-paragraph");
    
    const gallery = [
        {
            image: 'images/iskra-photography-paisagem1-md-unsplash.jpg', 
            slideTitle: 'Slide 1',
            slideText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            image: 'images/bailey-zindel-paisagem2-md-unsplash.jpg',
            slideTitle:'Slide 2',
            slideText:'Fuga, molestias porro asperiores, modi dolor sed in, nihil tenetur adipisci aut dolore?'
        },
        {
            image: 'images/mark-harpur-paisagem3-md-unsplash.jpg',
            slideTitle: 'Slide 3',
            slideText: 'Quibusdam culpa et quisquam corporis rem accusamus facilis debitis?'
        }
    ];

    
    let i = 0;
    setInterval(function() {
        iterateArray(gallery);
        overlay.fadeOut();
        overlayTitle.fadeOut();
        overlayParagraph.fadeOut();
        galleryImage.fadeOut(function(){
          $(this).attr("src", gallery[i].image);
          $(this).fadeIn();
          overlay.fadeIn();
          overlayTitle.text(gallery[i].slideTitle).fadeIn();
          overlayParagraph.text(gallery[i].slideText).fadeIn();
        })
    }, 4000);

    function iterateArray (arr) {
       return i = (i + 1) % arr.length;
    }
})