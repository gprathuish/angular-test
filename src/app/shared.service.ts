import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubUser{
  login: string;
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  public getGitHubData(username): Observable<GitHubUser> {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    };

    return this.httpClient.get<GitHubUser>(`https://api.github.com/users/${username}`, options);
  }
}
