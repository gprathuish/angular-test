import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubUser{
  login: string;
  id: number;
  site_admin: boolean;
  name: string;
  followers: number;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  public getGoogleMapData(username): Observable<GitHubUser> {
    const options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    };

    return this.httpClient.get<GitHubUser>(`https://api.github.com/users/${username}`, options);
  }
}
