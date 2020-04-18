export default class GithubApi {
  constructor(user, repo, commitsPerPage, token) {
    this.user = user;
    this.repo = repo;
    this.commitsPerPage = commitsPerPage;
    this.token = token;
  }

  getCommits() {
    return fetch(`https://api.github.com/repos/${this.user}/${this.repo}/commits?&per_page=${this.commitsPerPage}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json', 'Authorization': `${this.token}`
      }
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((res) => {
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

///api/v1/repos/{user}/{repo}/git/commits?sha={id}&page={p}



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