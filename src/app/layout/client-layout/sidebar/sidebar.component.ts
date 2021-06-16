import { Component, HostListener, OnInit } from '@angular/core';

import { WindowSize } from '../../../core/models/base';
import { ROUTES, toAbsolutePath } from '../../../core/constants/routes';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  WindowSize = WindowSize;
  windowSize: WindowSize = WindowSize.sm;
  sidebarWidth = 200;
  mobileSidebarWidth = 60;
  currentSidebarWidth = 0;

  sidebarItems = [
    {
      icon: 'home',
      label: 'sidebar.home',
      route: toAbsolutePath(ROUTES.client.home)
    },
    {
      icon: 'cloud-add',
      label: 'sidebar.add',
      route: toAbsolutePath(ROUTES.client.add)
    },
    {
      icon: 'cloud-withdraw',
      label: 'sidebar.withdraw',
      route: toAbsolutePath(ROUTES.client.withdraw)
    },
    {
      icon: 'transfers',
      label: 'sidebar.transfers',
      route: toAbsolutePath(ROUTES.client.transfers)
    },
    {
      icon: 'send',
      label: 'sidebar.send-request',
      route: toAbsolutePath(ROUTES.client.sendRequest)
    },
    {
      icon: 'virtual-cards',
      label: 'sidebar.virtual-cards',
      route: toAbsolutePath(ROUTES.client.virtualCards)
    },
    {
      icon: 'activity',
      label: 'sidebar.activity',
      route: toAbsolutePath(ROUTES.client.activity)
    },
    {
      icon: 'peer',
      label: 'sidebar.peer-transfers',
      route: toAbsolutePath(ROUTES.client.peerTransfers)
    },
    {
      icon: 'cubic',
      label: 'sidebar.crypto',
      route: toAbsolutePath(ROUTES.client.crypto)
    },
    {
      icon: 'triangle',
      label: 'sidebar.invite-friends',
      route: toAbsolutePath(ROUTES.client.inviteFriends)
    },
    {
      icon: 'store',
      label: 'sidebar.store-directory',
      route: toAbsolutePath(ROUTES.client.storeDirectory)
    },
    {
      icon: 'settings',
      label: 'sidebar.settings',
      route: toAbsolutePath(ROUTES.client.settings)
    },
    {
      icon: 'help',
      label: 'sidebar.invite-friends',
      route: toAbsolutePath(ROUTES.client.help)
    },
    {
      icon: 'logout',
      label: 'sidebar.logout',
      route: ''
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.setSidebarWidth();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.setSidebarWidth();
  }

  setSidebarWidth(): void {
    const screenWidth = Math.min(window.screen.width, window.innerWidth);
    if (screenWidth < 576) {
      this.currentSidebarWidth = 0;
    } else if (screenWidth >= 576 && screenWidth < 992) {
      this.currentSidebarWidth = this.mobileSidebarWidth;
    } else {
      this.currentSidebarWidth = this.sidebarWidth;
    }
  }

  logout(): void {
  }

}
