export default function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.classList.add('location');

        const taglineElement = document.createElement('p');
        taglineElement.textContent = tagline;
        taglineElement.classList.add('tagline');

        const priceElement = document.createElement('p');
        priceElement.textContent = `${price}€/day`;
        priceElement.classList.add('price');

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineElement);
        article.appendChild(priceElement);

        article.addEventListener('click', () => {
            window.location.href = `photographer.html?id=${id}`;
        });

        return article;
    }

    return { getUserCardDOM };
}











/*function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}*/