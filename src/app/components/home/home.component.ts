import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  itemsList: Items[] = [];

  constructor(private itemService:ItemsService) {  }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(i => {
      console.log(i);
      this.itemsList = i;
      
    });
}
}
