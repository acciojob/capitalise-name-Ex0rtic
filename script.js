let x=document.getElementById("fname")
	x.addEventListener("blur", function(event) {
            event.target.value = event.target.value.toUpperCase();
        });