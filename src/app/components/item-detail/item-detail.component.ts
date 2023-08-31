import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  itemID: number = 0;
  selectedItem: any = [];

  constructor(private itemService: ItemsService, private actRoute:ActivatedRoute, private router: Router) {}

  ngOnInit(): void{
    console.log("got Item!", this.actRoute.snapshot);
    this.itemID = Number(this.actRoute.snapshot.paramMap.get('id') ?? 0);
    console.log("itemID = ", this.itemID);
    this.itemService.getItemByID(this.itemID).subscribe(found => {this.selectedItem = found});
    // this.selectedItem = this.itemService.getItemByID(this.itemID);
  }

}
