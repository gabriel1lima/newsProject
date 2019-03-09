import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private baseUrl = "http://localhost/camara_milagres/wp-json/";
  constructor(private http: HttpClient) {}

  getNews(): Observable<[]> {
    return this.http
      .get<[]>(this.baseUrl + "wp/v2/posts?categories=5")
      .pipe(tap(heroes => console.log("fetched news")));
  }
}
