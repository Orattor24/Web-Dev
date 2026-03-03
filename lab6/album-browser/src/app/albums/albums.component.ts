import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Обязательно для ngModel
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Добавь их сюда
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  newTitle = ''; // Для нового альбома

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  addAlbum() {
    if (!this.newTitle.trim()) return;

    const albumData = { title: this.newTitle, userId: 1 } as Album;

    this.albumService.createAlbum(albumData).subscribe((newAlbum) => {
      this.albums.unshift(newAlbum); // Добавляем в начало списка локально [cite: 34]
      this.newTitle = ''; // Очищаем поле
    });
  }

  // Метод удаления из Task 3 [cite: 71]
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
