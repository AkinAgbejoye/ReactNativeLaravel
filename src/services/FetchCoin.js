const URI =  'http://localhost:8000';

export default{
  async fetchCoins(){
    try{
      let response =  await fetch(URI + 'api\coins');
      let responseJsonData = response.json();
      return responseJsonData;
    }catch(err){
     console.log(err);
    }
  }
}