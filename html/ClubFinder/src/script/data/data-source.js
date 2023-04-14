class DataSource {
  static async searchClub(keyword){
      const response = await fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
      const responseJson = await response.json()
      console.log(responseJson)
      if (responseJson.teams) {
       return Promise.resolve(responseJson.teams);
      } else {
       return Promise.reject(`${keyword} is not found`);
      }
  }
}

export default DataSource