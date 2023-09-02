import { Component, ViewChild } from '@angular/core';
import { Items } from 'src/app/models/items';
import { ItemsService } from 'src/app/services/items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  // standalone: true,
  // imports: [MatGridListModule]
})
export class ItemsComponent {

   itemsList: Items[] = [];

  constructor(private itemService:ItemsService) {  }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(i => {
      console.log(i);
      this.itemsList = i;
    });
  }


}
