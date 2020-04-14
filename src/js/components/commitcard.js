export default class CommitCard {
  create(date, urlToImage, name, mail, message) {
    const template = `
            <div class="commits__cell">
              <div class="commit">
                  <p class="commit__date">${date}</p>
                 <div class="commit__profile">
                      <img src="<%=require('${urlToImage}').default%>" alt="аватар автора коммита" class="commit__photo"/>
                     <div class="commit__info">
                         <p class="commit__name">${name}</p>
                         <p class="commit__email">${mail}</p>
                     </div>
                 </div>
                  <p class="commit__text">${message}</p>
              </div>
            </div>
        `;
    return template;
  }
}

