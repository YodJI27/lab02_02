const canvas = document.getElementById('lab02');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('lab02_02');
const ctx2 = canvas2.getContext('2d');
let image = new Image();
image.src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';

image.onload = function() {
	ctx.drawImage(image, 0, 0);
	let image__data = ctx.getImageData(0, 0, canvas.width, canvas.height);

	let image__data2 = ctx2.createImageData(canvas.width, canvas.height);
		for (let i = 0; i < canvas.height; i++) {
			for (let j = 0; j < canvas.width; j++) {
				let av = 0;
				for (let k = 0; k < 3; k++) {
					av += image__data.data[4*(i*canvas.width+j)+k];
                }
    			av /= 3;
			    for (let k = 0; k < 4; k++) {
    			    if (k == 4) {
					image__data2.data[4*(i*canvas.width+j)+k] = image__data.data[4*(i*canvas.width+j)+k];
				}
                image__data2.data[4*(i*canvas.width+j)+k] = av;				
            }
		}
	}
	ctx2.putImageData(image__data2, 0, 0);
}
