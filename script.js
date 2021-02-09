let scrollUp = document.getElementById("scroll_to_top");


let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-150);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

scrollUp.addEventListener('click', up);

window.addEventListener('scroll', ()=>{
    scrollUp.hidden = (pageYOffset < document.documentElement.clientHeight);
});