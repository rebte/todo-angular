import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  localStorageUser: string = localStorage.getItem('user');

  constructor() {}

  ngOnInit(): void {}
}
