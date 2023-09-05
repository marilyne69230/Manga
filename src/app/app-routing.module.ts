import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MangaListComponent } from './manga-list/manga-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listManga', component: MangaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
