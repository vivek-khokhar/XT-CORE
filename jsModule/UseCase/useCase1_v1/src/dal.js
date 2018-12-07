class DataAccessLayer {
    constructor () {

    }

    getWrapper(url) {
        return fetch(url);
    }

    postWrapper(url, profile) {
        return fetch(url, {
            method: "POST", // or 'PUT'
            body: JSON.stringify(profile), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json"
            }
          });
    }

    patchWrapper(url, profile){
        return fetch(url, {
            method: "PATCH", // or 'PUT'
            body: JSON.stringify(profile), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json"
            }
          });
    }

    deleteWrapper(url) {
        return fetch(url, {
            method: "DELETE", // or 'PUT'
            headers: {
              "Content-Type": "application/json"
            }
          });
    }
}

module.exports = DataAccessLayer;