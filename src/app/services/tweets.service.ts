import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

// https://api.twitter.com/2
const geckoUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false";
const twitterUrl = "/api/2/tweets?ids=100";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPFtXwEAAAAAXxkkIK2cOQn%2FYCOmHsjirbiPPhg%3DK2nhf4avbNhyQfniJRfT6ISdIUpMRrNElSZMsYW1VY2W8bLp9L'
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
    let x = this.http.get(geckoUrl);
     x.forEach(value => console.log(value.valueOf())) 
    return x;
  }

  getTweets(): void {
    this.http.get(twitterUrl, httpOptions).subscribe(x => console.log(x));
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
