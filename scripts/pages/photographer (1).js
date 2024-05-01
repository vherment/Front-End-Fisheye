import data from '../../data/photographers.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const photographerId = urlParams.get('id');

    if (photographerId) {
        const photographer = data.photographers.find(p => p.id.toString() === photographerId);
        const photographerMedia = data.media.filter(m => m.photographerId.toString() === photographerId);

        if (photographer) {
            displayPhotographerInfo(photographer);
            displayPhotographerMedia(photographerMedia);
        } else {
            console.error('Photographe non trouvé');
        }
    } else {
        console.error('ID de photographe non trouvé dans l\'URL');
    }
});

function displayPhotographerInfo(photographer) {
    document.getElementById('photographer-name').textContent = photographer.name;
    document.getElementById('photographer-location').textContent = photographer.city + ', ' + photographer.country;
    document.getElementById('photographer-photo').src = `assets/photographers/${photographer.portrait}`;
    document.getElementById('photographer-photo').alt = `Portrait de ${photographer.name}`;
}

function displayPhotographerMedia(media, photographerName) {
    const worksSection = document.getElementById('photographer-works');
    media.forEach(m => {
        const mediaElement = createMediaElement(m, photographerName);
        worksSection.appendChild(mediaElement);
    });
}

function createMediaElement(m, photographerName) {
    const mediaElement = document.createElement('img');
    const photographerPath = photographerName.replace(/ /g, '-').toLowerCase();
    mediaElement.src = `Sample Photos/${photographerPath}/${m.src}`;
    mediaElement.alt = m.title;
    
    return mediaElement;
}