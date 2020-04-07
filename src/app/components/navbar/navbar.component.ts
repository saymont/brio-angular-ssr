import { Component, OnInit } from '@angular/core';
import { RouteInfo, ROUTES } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  menuItems: RouteInfo[];
  isCollapsed = true;

  nav_selector1 = 1;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.menuItems = ROUTES;
  }

  // sleep(milliseconds: number) {
  //   const start = new Date().getTime();
  //   for (let i = 0; i < 1e7; i++) {
  //     if (new Date().getTime() - start > milliseconds) {
  //       break;
  //     }
  //   }
  // }

  // handleCollapsibleClick(event: Event, menuitem: RouteInfo) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.sleep(10);

  //   if (!menuitem || menuitem.isCollapsing !== undefined) {
  //     return;
  //   }

  //   menuitem.isCollapsing = true;

  //   let element = event.target as HTMLElement;
  //   const rootElement = document.querySelector('html');
  //   while (element.dataset.toggle !== 'collapse' && element !== rootElement) {
  //     element = element.parentNode as HTMLElement;
  //   }

  //   element = element.parentNode.children[1] as HTMLElement;

  //   if (element.classList.contains('collapse') && !element.classList.contains('show')) {
  //     element.classList.value = 'before-collapsing';
  //     const style = element.scrollHeight;

  //     element.classList.value = 'collapsing';
  //     setTimeout(() => {
  //       element.setAttribute('style', 'height:' + style + 'px');
  //     }, 1);
  //     setTimeout(() => {
  //       element.classList.value = 'collapse show';
  //       element.removeAttribute('style');
  //       menuitem.isCollapsing = undefined;
  //     }, 350);
  //   } else {
  //     const style = element.scrollHeight;
  //     setTimeout(() => {
  //       element.setAttribute('style', 'height:' + (style + 20) + 'px');
  //     }, 3);
  //     setTimeout(() => {
  //       element.classList.value = 'collapsing';
  //     }, 3);
  //     setTimeout(() => {
  //       element.removeAttribute('style');
  //     }, 20);
  //     setTimeout(() => {
  //       element.classList.value = 'collapse';
  //       menuitem.isCollapsing = undefined;
  //     }, 400);
  //   }
  // }

}

