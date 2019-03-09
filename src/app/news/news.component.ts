import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  title = "News";
  news = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews().subscribe(news => (this.news = news));
  }
}
