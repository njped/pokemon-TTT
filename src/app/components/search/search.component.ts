import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GitDatInfoService } from 'src/app/services/git-dat-info.service';
import { CacheDatInfoService } from 'src/app/services/cacheDatInfo.service';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  apiResponse: string = ''
  imageArray: string[] = []

  form: FormGroup;
  fb: FormBuilder = new FormBuilder

  constructor(
    private gitDatInfo: GitDatInfoService, 
    private route: ActivatedRoute,
    private cacheDatInfo: CacheDatInfoService, 
    fb: FormBuilder ) {
    this.form = fb.group({
      searchTerm: ['Arceus']
    })
  }

  selectImage(imageUrl: string) {
    let playerId = Number(this.route.snapshot.paramMap.get('player'))
    let player = new Player(playerId, imageUrl)
    this.cacheDatInfo.savePlayerData(player)
  }

  ngOnInit() {
  this.search();
  }

  search() {
    let name = this.form.controls['searchTerm'].value
    this.imageArray = []
    this.gitDatInfo.searchPokemon(name)
    .subscribe((res: any) => {
      this.apiResponse = JSON.stringify(res);

      if (res.sprites.front_default) this.imageArray.push(res.sprites.front_default)
      if (res.sprites.front_female) this.imageArray.push(res.sprites.front_female)
      if (res.sprites.back_default) this.imageArray.push(res.sprites.back_default)
      if (res.sprites.back_female) this.imageArray.push(res.sprites.back_female)
      if (res.sprites.front_shiny) this.imageArray.push(res.sprites.front_shiny)
      if (res.sprites.front_shiny_female) this.imageArray.push(res.sprites.front_shiny_female)
      if (res.sprites.back_shiny) this.imageArray.push(res.sprites.back_shiny)
      if (res.sprites.back_shiny_female) this.imageArray.push(res.sprites.back_shiny_female)

    })
  }

}
