import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  mediaItems = [
    {
      id: 1,
      name: 'Saw',
      medium: 'Movie',
      category: 'Horror',
      year: 2004,
      watchedOn: 1294166565384,
      isFavourite: true,
    },
    {
      id: 2,
      name: 'The Walking Dead',
      medium: 'Series',
      category: 'Horror',
      year: 2010,
      watchedOn: 1294166565384,
      isFavourite: true,
    },
  ];

  get(medium: any) {
    const getOptions = {
      params: { medium },
    };
    return this.http.get<MediaItemsResponse>('mediaitems').pipe(
      map((response: MediaItemsResponse) => {
        return response.mediaItems;
      }),
      catchError(this.handleError)
    );
  }

  add(mediaItem: any) {
    return this.http
      .post('mediaitems', mediaItem)
      .pipe(catchError(this.handleError));
  }

  delete(mediaItem: any) {
    return this.http
      .delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('A data error occured, please try again.');
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
