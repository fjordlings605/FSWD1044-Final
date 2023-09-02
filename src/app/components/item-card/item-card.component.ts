import { Component, OnInit, Input } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit{
  @Input()
  // i.name: string = "";

  ngOnInit(): void{

  }
}
