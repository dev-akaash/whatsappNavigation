import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

const SPLITPANEBREAKPOINT = 992;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isMobile: boolean;

  constructor(
    private platform: Platform,
    private router: Router
  ) {}

  ngOnInit() {
    const width = this.platform.width();
    this.isMobile = width < SPLITPANEBREAKPOINT;
    if (!this.isMobile) {
      this.router.navigateByUrl('/web', { replaceUrl: true });
    }
  }
  
  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    console.log('New Width: ', newWidth);
    
    if (this.isMobile && newWidth >= SPLITPANEBREAKPOINT) {
      this.router.navigateByUrl('/web', { replaceUrl: true });
    } else if (!this.isMobile && newWidth < SPLITPANEBREAKPOINT) {
      this.router.navigateByUrl('/list', { replaceUrl: true });
    }
    this.isMobile = newWidth < SPLITPANEBREAKPOINT;
  }
}
