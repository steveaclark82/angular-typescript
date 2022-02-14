import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Music } from "src/app/shared/models/music";

@Component({
  selector: "app-display-music",
  templateUrl: "./display-music.component.html",
  styleUrls: ["./display-music.component.css"],
})
export class DisplayMusicComponent implements OnInit {

  private musicsRoute = "http://localhost:3000/music";
  public musics: Music[];

  constructor(private http: HttpClient) {}

  getMusics() {
    this.http.get<Music[]>(this.musicsRoute).subscribe((musics) => {
      this.musics = musics;
      console.log("Music", this.musics);
    });
  }
  ngOnInit() {
    this.getMusics();
  }
}