import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  router$: Subscription;
  lastPoppedUrl: string;
  yScrollStack: number[] = [];

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    const isWindows = /Win/.test(navigator.platform);
    const htmlElement = document.getElementsByTagName('html')[0];
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      htmlElement.classList.add('perfect-scrollbar-on');
    } else {
      htmlElement.classList.remove('perfect-scrollbar-off');
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url !== this.lastPoppedUrl) {
          this.yScrollStack.push(window.scrollY);
        }
      } else if (event instanceof NavigationEnd) {
        if (event.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  
    this.router$ = this.router.events.pipe().subscribe(() => {
      const elemMainPanel = document.querySelector('.main-panel') as HTMLElement;
      const elemSidebar = document.querySelector('.navigation navbar') as HTMLElement;
      elemMainPanel.scrollTop = 0;
      elemSidebar.scrollTop = 0;
    });
  }

}
