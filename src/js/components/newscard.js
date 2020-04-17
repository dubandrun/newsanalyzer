export default class NewsCard {
    create(url, urlToImage, publishedAt, title, description, source) {
        const template = `
           <div class="news-card">
             <a href="${url}" class="link news-card__url" target="_blank">
               <div class="news-card__image-container">
               <img src="${urlToImage}" alt="обложка новости" class="news-card__image">
               </div>
               <p class="news-card__date">${publishedAt}</p>
               <h3 class="news-card__title">${title}</h3>
               <p class="news-card__text">${description}</p>
               <p class="news-card__source">${source}</p>
             </a>
           </div>`;
        return template;

    }
}
