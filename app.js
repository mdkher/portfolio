
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
    let slideClass = document.querySelector("#trial");
    if(entries[0].isIntersecting === true){
        console.log('Element has just become visible in screen');
        slideClass.classList.add('in-view')
    } else {
        console.log('Element has just become invisible in screen');
        slideClass.classList.remove('in-view')
    }
		
}, { threshold: [0] });

observer.observe(document.querySelector("#trial"));