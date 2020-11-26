import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pod-cast',
  templateUrl: './pod-cast.component.html',
  styleUrls: ['./pod-cast.component.scss']
})
export class PodCastComponent implements OnInit {

  podcasts;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPodCasts().subscribe((data)=>{
      console.log(data['podcasts'].slice(0,5));
      this.podcasts = data['podcasts'].slice(0,5);
    });
  }

}
