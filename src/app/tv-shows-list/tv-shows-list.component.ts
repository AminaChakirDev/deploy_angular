import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css'],
})
export class TvShowsListComponent {
  tvShows: { id: number; poster_path: string }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getTvShowsFromService();
  }

  getTvShowsFromService() {
    this.apiService.getTvShows().subscribe((data) => {
      this.tvShows = data.results;
    });
  }
}
