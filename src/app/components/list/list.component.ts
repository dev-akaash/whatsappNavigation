import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  chats = ['Max', 'Matt', 'Mike', 'Mona', 'Monica', 'Missy', 'Max', 'Matt', 'Mike', 'Mona', 'Monica', 'Missy', 'Max', 'Matt', 'Mike', 'Mona', 'Monica', 'Missy', 'Max', 'Matt', 'Mike', 'Mona', 'Monica', 'Missy'];
  isMobile: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  openChat(chat) {
    this.router.navigateByUrl(`/list/${chat}`);
  }

}
