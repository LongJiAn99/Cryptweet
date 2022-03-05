import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../Coin';

// https://api.twitter.com/2
const geckoUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
const twitterUrl = '/api/2/tweets/counts/recent?query=';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer AAAAAAAAAAAAAAAAAAAAAPFtXwEAAAAAXxkkIK2cOQn%2FYCOmHsjirbiPPhg%3DK2nhf4avbNhyQfniJRfT6ISdIUpMRrNElSZMsYW1VY2W8bLp9L',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCoins(): Observable<any> {
    let x = this.http.get(geckoUrl);
    return x;
  }

  getTweets(symbol: any): Observable<any> {
    let tweets = this.http.get(
      twitterUrl + symbol + '&granularity=day',
      httpOptions
    );
    return tweets;
  }
}
