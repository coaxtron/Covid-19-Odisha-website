import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    let link = document.createElement("a");
    link.download = "filename";
    link.href = "assets/test.apk";
    link.click();
    this.counter += 1;
  }
}
