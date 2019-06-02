import { Component, OnInit } from '@angular/core';
import { UserAsyncService } from '../user-async.service';

@Component({
  selector: 'app-user-async',
  templateUrl: './user-async.component.html',
  styleUrls: ['./user-async.component.css'],
  providers: [UserAsyncService]
})
export class UserAsyncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
