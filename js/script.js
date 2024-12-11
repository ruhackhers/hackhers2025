document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    const startCounting = (counter) => {
      const target = +counter.getAttribute("data-target");
      const prefix = counter.getAttribute("data-prefix") || ""; 
      const speed = 50; 
  
      let count = 0;
  
      const updateCount = () => {
        count += Math.ceil(target / speed);
        if (count >= target) {
          counter.textContent = `${prefix}${target}+`; 
        } else {
          counter.textContent = `${prefix}${count}`;
          requestAnimationFrame(updateCount);
        }
      };
  
      updateCount();
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            counter.style.opacity = 1; 
            startCounting(counter);
            observer.unobserve(counter); 
          }
        });
      },
      { threshold: 0.5 } 
    );
  
    counters.forEach((counter) => observer.observe(counter));
  });
$(document).ready(function() {
  $('.faq li .question').click(function () {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
  });

});
  