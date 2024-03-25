import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  mediaItems = [
    {
      id: 1,
      name: "Saw",
      medium: "Movie",
      category: "Horror",
      year: 2004,
      watchedOn: 1294166565384,
      isFavourite: true,
    },
    {
      id: 2,
      name: "The Walking Dead",
      medium: "Series",
      category: "Horror",
      year: 2010,
      watchedOn: 1294166565384,
      isFavourite: true,
    },
  ];

  onMediaItemDelete(mediaItem: any) {}
}
