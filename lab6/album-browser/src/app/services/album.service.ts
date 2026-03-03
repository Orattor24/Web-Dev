import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // Базовый URL API [cite: 25]
  private baseUrl = 'https://jsonplaceholder.typicode.com'; // Убедись, что нет опечаток

  constructor(private http: HttpClient) {} // Инъекция HttpClient

  // Получить все 100 альбомов [cite: 26, 52]
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  // Получить один альбом по ID [cite: 29, 52]
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }
  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/albums`, album);
  }

  // Получить фотографии конкретного альбома [cite: 30, 52]
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  // Обновить заголовок альбома (метод PUT) [cite: 31, 53, 55]
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  // Удалить альбом (метод DELETE) [cite: 32, 56]
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}
