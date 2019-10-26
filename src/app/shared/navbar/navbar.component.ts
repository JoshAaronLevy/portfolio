import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';

const misc: any = {
  navbar_menu_visible: 0,
  active_collapse: true,
  disabled_collapse_init: 0,
};

const ROUTES: any = [
  {
    path: '/home',
    title: 'Web Developer',
    type: 'link'
  }, {
    path: '/skills',
    title: 'Skills',
    type: 'link'
  },
  {
    path: '/projects',
    title: 'Projects',
    type: 'link'
  },
  {
    path: '/experience',
    title: 'Experience',
    type: 'link'
  },
  {
    path: '/resume',
    title: 'Resume',
    type: 'link'
  },
  {
    path: '/contact',
    title: 'Contact',
    type: 'link'
  }
];

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  @ViewChild('app-navbar', {static: false}) button: any;

  constructor(
    location: Location,
    private element: ElementRef
  ) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    if (body.classList.contains('sidebar-mini')) {
      misc.sidebar_mini_active = true;
    } else if (!body.classList.contains('sidebar-mini')) {
      misc.sidebar_mini_active = false;
    }
    if (body.classList.contains('hide-sidebar')) {
      misc.hide_sidebar_active = true;
    } else if (!body.classList.contains('hide-sidebar')) {
      misc.hide_sidebar_active = false;
    }
  }

  onResize(event) {
    if ($(window).width() > 991) {
      return false;
    } else {
      return true;
    }
  }

  sidebarOpen() {
    let $toggle = document.getElementsByClassName('navbar-toggler')[0];
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function() {
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');
    setTimeout(function() {
      $toggle.classList.add('toggled');
    }, 430);
    let $layer = document.createElement('div');
    $layer.setAttribute('class', 'close-layer');
    if (body.querySelectorAll('.main-panel')) {
      document.getElementsByClassName('main-panel')[0].appendChild($layer);
    } else if (body.classList.contains('off-canvas-sidebar')) {
      document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
    }
    setTimeout(function() {
      $layer.classList.add('visible');
    }, 100);
    body.classList.add('nav-open');
    this.sidebarVisible = true;
    this.mobile_menu_visible = 1;
  }

  sidebarClose() {
    let $toggle = document.getElementsByClassName('navbar-toggler')[0];
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    let $layer = document.createElement('div');
    $layer.setAttribute('class', 'close-layer');
    setTimeout(function() {
      toggleButton.classList.remove('toggled');
    }, 500);
    body.classList.remove('nav-open');
    setTimeout(function() {
      $toggle.classList.remove('toggled');
    }, 430);
    if ($layer) {
      $layer.remove();
    }
    this.sidebarVisible = false;
    this.mobile_menu_visible = 0;
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  getTitle() {
    let title = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#') {
      title = title.slice( 1 );
    } else {
      title = title;
    }
    for (let i = 0; i < this.listTitles.length; i++) {
      if (this.listTitles[i].type === 'link' && this.listTitles[i].path === title) {
        return this.listTitles[i].title;
      } else if (this.listTitles[i].type === 'sub') {
        for (let j = 0; j < this.listTitles[i].children.length; j++) {
          let subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
          if (subtitle === title) {
            return this.listTitles[i].children[j].title;
          }
        }
      }
    }
    return 'Web Developer';
  }

  getPath() {
    return this.location.prepareExternalUrl(this.location.path());
  }
}
