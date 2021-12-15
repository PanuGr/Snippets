//SIMPLE SANITIZE

getData().
    then(data => {
        const { title, info, image } = data;
        cardImages.src = image;
        cardTitle.textContent = title;
        cardText.textContent = info;
    });