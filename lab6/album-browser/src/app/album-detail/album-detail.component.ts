import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Важно для работы шаблона
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute, // Чтобы прочитать :id из ссылки [cite: 74]
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  save() {
    // Вызываем метод обновления из сервиса [cite: 53, 77]
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Title updated successfully (simulated)!');
    });
  }
}
