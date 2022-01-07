import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'


// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = 'AAAAAAAAAAAAAAAAAAAAABteXwEAAAAAYc5wJZS5E4xwI0bqRVIdB0xntQE%3Dhl7lwDLHYtdp2Ct27A5FkG74LCXSaFwMWnsnZ4FL4hQ9zGPysH';

// https://api.twitter.com/2
const endpointUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'AAAAAAAAAAAAAAAAAAAAABteXwEAAAAAYc5wJZS5E4xwI0bqRVIdB0xntQE%3Dhl7lwDLHYtdp2Ct27A5FkG74LCXSaFwMWnsnZ4FL4hQ9zGPysH'
  }),
};



@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getCoins(): Observable<any> {
    let x = this.http.get(endpointUrl);
     x.forEach(value => console.log(value.valueOf())) 
    return x;
  }


  /* async getTweets() {
    try {
      console.log(client);
      const x = await client.get('users/14/tweets');
      /* const recentTweetsWithNode = await twitterClient.v2.tweetCountRecent('NodeJs');
      console.log(recentTweetsWithNode.data[0].tweet_count); 
    } catch (e) {
      console.log(e);
    }
  } */

}
