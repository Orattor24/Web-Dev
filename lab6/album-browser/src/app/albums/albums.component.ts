import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ОБЯЗАТЕЛЬНО для *ngIf и *ngFor
import { FormsModule } from '@angular/forms';   // ОБЯЗАТЕЛЬНО для [(ngModel)]
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Обязательно добавь их сюда
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;
  newTitle: string = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    console.log('Fetching albums...'); // Проверка в консоли
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        console.log('Albums loaded:', this.albums.length);
      },
      error: (err) => {
        console.error('API Error:', err); // Если здесь будет ошибка, мы её увидим
        this.loading = false;
      }
    });
  }

  addAlbum() {
    if (!this.newTitle.trim()) return;

    const albumData = { title: this.newTitle, userId: 1 } as Album;

    this.albumService.createAlbum(albumData).subscribe((newAlbum) => {
      this.albums.push(newAlbum); // Добавляем в начало списка локально [cite: 34]
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
