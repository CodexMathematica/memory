setInterval(rainFall, 300);

function rainFall() {
  const waterDrop = document.createElement('p');
  
	waterDrop.classList.add('drop');
	waterDrop.style.left = Math.random() * window.innerWidth + 'px';
	waterDrop.style.animationDuration = Math.random() * 4 + 's';
	waterDrop.style.opacity = Math.random() + 0.7;
	waterDrop.style.fontSize = Math.random() * 40 +'px';
	
	document.body.appendChild(waterDrop);
	
	setTimeout(() => {
		waterDrop.remove();
	}, 5000)
};