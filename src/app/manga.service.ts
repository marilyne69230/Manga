import { Injectable } from '@angular/core';
import { MANGA } from './mock-manga'


@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  fetchAllManga(){
    return MANGA;
  }
}
