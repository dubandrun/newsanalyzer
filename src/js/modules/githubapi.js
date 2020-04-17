export default class GithubApi {
  // constructor(input) {
  //   this.input = input;
  // }

  getCommits() {
    return fetch("https://api.github.com/dubandrun/newsanalyzer/commits", {
      method: "GET",
      headers: {
        "Authorization": "token "
      }
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}

// https://api.github.com/dubandrun/newsanalyzer/commits

//https://www.youtube.com/watch?v=b0W7SHHDc28 видео 
//https://github.com/ceceliacreates/APITools/blob/master/PullCommitsSinceRelease/PullCommitsSinceRelease.js





// let userpass = btoa(`${clientId}:${clientSecret}`);

// let url_2 = `https://api.github.com/applications/${clientId}/tokens/${x.access_token}`;
// fetch(url_2, { 
//             method: 'GET',
//             headers: {
//                 'Authorization': `Basic ${userpass}`
//             }
//         } )
// .then(x => x.json())
// .then(x => {console.log(x)});