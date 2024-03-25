import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from '../media-item-service/media-item-service.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems: MediaItem[] | undefined;

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.getMediaItems(this.medium);
  }

  onMediaItemDelete(mediaItem: any) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}