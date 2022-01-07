import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'


// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = 'AAAAAAAAAAAAAAAAAAAAABteXwEAAAAAYc5wJZS5E4xwI0bqRVIdB0xntQE%3Dhl7lwDLHYtdp2Ct27A5FkG74LCXSaFwMWnsnZ4FL4hQ9zGPysH';

// https://api.twitter.com/2
const endpointUrl = "http://localhost:4200/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAABteXwEAAAAAYc5wJZS5E4xwI0bqRVIdB0xntQE%3Dhl7lwDLHYtdp2Ct27A5FkG74LCXSaFwMWnsnZ4FL4hQ9zGPysH'
  }),
};



@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getTweets(): Observable<any> {
    console.log(httpOptions.headers)
    return this.http.get(endpointUrl, httpOptions);
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
