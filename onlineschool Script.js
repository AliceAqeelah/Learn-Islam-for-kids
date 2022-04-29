document.addEventListener('DOMContentLoaded', function() {
    var courses = document.querySelectorAll('.carousel');
    M.Carousel.init(courses,{
        fullWidth: true,
        indicators: true
    });
  });
const cards = document.querySelectorAll(".card");
const image1 = document.getElementById("image");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        threshold: 0.5,
    }
)
cards.forEach(card=>{
    observer.observe(card)
})

