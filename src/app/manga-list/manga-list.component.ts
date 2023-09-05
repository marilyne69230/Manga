import { Component } from '@angular/core';
import { Imanga } from '../entities';
import { MANGA } from '../mock-manga';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent {

  mangaList: Imanga[] = [];

  constructor(
    private service:MangaService,
  ){}

  getManga() {
    this.mangaList = this.service.fetchAllManga();
    return this.mangaList;
  }

  ngOnInit() {
    console.log(this.getManga());
  }
}
