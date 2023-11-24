document.getElementById("toggle").addEventListener("click", toggle);

function toggle(e) {
	const content = document.getElementById("content");

	if (content.style.getPropertyValue("display") == "none") {
		content.style.setProperty("display", "block");
		e.target.innerText = "Esconder";
	} else {
		content.style.setProperty("display", "none");
		e.target.innerText = "Veja mais";
	} 
}

