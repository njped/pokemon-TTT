import { Component, OnInit } from '@angular/core';
import { GitDatInfoService } from 'src/app/services/git-dat-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gitDatInfo: GitDatInfoService) { }

  theFirstOne: string = "arceus"
  apiResponse: string = ''
  imageArray: string[] = []

  ngOnInit() {
  this.search(this.theFirstOne);
  }

  search(name: string) {
    this.gitDatInfo.searchPokemon(name)
    .subscribe((res: any) => {
      this.apiResponse = JSON.stringify(res);
    })
  }

}
