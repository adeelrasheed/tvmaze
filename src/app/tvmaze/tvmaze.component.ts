import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tvmazeshow } from '../services/tvmaze';
import { TvmazeService } from '../services/tvmaze.service';

@Component({
  selector: 'app-tvmaze',
  templateUrl: './tvmaze.component.html',
  styleUrls: ['./tvmaze.component.css']
})
export class TvmazeComponent implements OnInit {
  showdetail: any;
  seasondetail: any;
  episodesdetail: any;

  constructor(
    private route: ActivatedRoute,
    private tvmazeService: TvmazeService,
    private location: Location) { }

  ngOnInit() {
    this.displayDetail();
  }

  // display show detail and seasons

  displayDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tvmazeService.getTvmazeshows(id)
    .subscribe(showdetail => this.showdetail = showdetail);
    this.tvmazeService.getShowseasons(id)
    .subscribe(seasondetail => this.seasondetail = seasondetail);
    this.tvmazeService.getShowepisodes(id)
    .subscribe(episodesdetail => this.episodesdetail = episodesdetail);
  }
}