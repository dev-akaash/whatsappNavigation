import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  name = '';

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.router.snapshot.paramMap.get('name');
  }

}
