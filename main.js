document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("pitch").addEventListener("click", pitch);

function toggle(e) {
	const content = document.getElementById("content");

	if (content.style.getPropertyValue("display") == "none") {
		content.style.setProperty("display", "block");
	} else {
		content.style.setProperty("display", "none");
	} 
}
function pitch(e) {
	const content = document.getElementById("banner");

	if (content.style.getPropertyValue("display") == "none") {
		content.style.setProperty("display", "flex");
	} else {
		content.style.setProperty("display", "none");
	} 
}

