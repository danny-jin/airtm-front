import { Component, OnInit } from '@angular/core';
import { ROUTES, toAbsolutePath } from '../../../core/constants/routes';

@Component({
  selector: 'app-client-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent implements OnInit {

  showMore = false;
  tabItems = [
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
      icon: 'more',
      label: '',
      route: ''
    }
  ];

  moreItems = [
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
      label: 'sidebar.help',
      route: '',
      externalLink: 'https://help.airtm.com'
    },
    {
      icon: 'logout',
      label: 'sidebar.logout',
      route: ''
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  logout(): void {
  }

  externalLink(link: string): void {
    window.open(link, '_blank');
  }

}
