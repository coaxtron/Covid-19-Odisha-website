import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.css']
})
export class ScreenshotComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/xTEDyKNAtgw");
  
  }

 
  ngOnInit(): void {
  }

}
