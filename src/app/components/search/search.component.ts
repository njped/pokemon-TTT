import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GitDatInfoService } from 'src/app/services/git-dat-info.service';

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

  constructor(private gitDatInfo: GitDatInfoService, fb: FormBuilder) {
    this.form = fb.group({
      searchTerm: ['Arceus']
    })
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

      this.imageArray.push(res.sprites.front_default)
      this.imageArray.push(res.sprites.back_default)
      this.imageArray.push(res.sprites.front_shiny)
      this.imageArray.push(res.sprites.back_shiny)

      console.log("Image Array:" + this.imageArray)
    })
  }

}
