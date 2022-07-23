import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SocialMediaData } from './interfaces/SocialMediaData';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private socialMediaDataURL = 'data/socialMedia.json'

  constructor(private http: HttpClient) { }

  getSocialMediaData() {
    return this.http.get<SocialMediaData>(this.socialMediaDataURL);
  }

}

