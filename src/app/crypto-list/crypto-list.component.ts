import { Component, OnInit } from '@angular/core';
import { Coin } from '../Coin';
import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  coins: Coin[] = [];

  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweetsService.getCoins().subscribe((value) => {
      this.coins = value;
      this.coins.forEach((x) => {
        this.tweetsService.getTweets(x.name).subscribe((y) => {
          x.tweets = y.meta.total_tweet_count;
        });
      });
    });
  }
}
