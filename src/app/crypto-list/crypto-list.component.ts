import { Component, OnInit } from '@angular/core';
import { COINS } from '../mock-coins';
import { Coin } from '../Coin';
import TwitterApi from 'twitter-api-v2';
import { TweetsService } from '../services/tweets.service';


/* const twitterClient = new TwitterApi("AAAAAAAAAAAAAAAAAAAAABteXwEAAAAAYc5wJZS5E4xwI0bqRVIdB0xntQE%3Dhl7lwDLHYtdp2Ct27A5FkG74LCXSaFwMWnsnZ4FL4hQ9zGPysH")

const v2Client = twitterClient.v2; */
/* const recentTweetsWithNode = await v2Client.tweetCountRecent('NodeJs');
console.log(recentTweetsWithNode.data[0].tweet_count); */
/* const allTweetsWithNode = await twitterClient.v2.tweetCountAll('NodeJs');
console.log(allTweetsWithNode.data[0].tweet_count); */


/* const twitterClient = new TwitterApi("AAAAAAAAAAAAAAAAAAAAABteXwEAAAAAYc5wJZS5E4xwI0bqRVIdB0xntQE%3Dhl7lwDLHYtdp2Ct27A5FkG74LCXSaFwMWnsnZ4FL4hQ9zGPysH")
async function f() {
  try {
    const recentTweetsWithNode = await twitterClient.v2.tweetCountRecent('hi');
    console.log(recentTweetsWithNode.data[0].tweet_count);
  } catch (e) {
    console.log(e);
  }
}

f() */


@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})

export class CryptoListComponent implements OnInit {
  coins: Coin[] = []; 
  tweets: number[] = [];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    this.tweetsService.getTweets().subscribe();
    console.log("hi");
  }

}
