import { Component } from '@angular/core';
import { Items } from 'src/app/models/items';
import { ItemsService } from 'src/app/services/items.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {
  id: number = 0;

  selectedItem: Items = new Items();

  constructor(private itemService:ItemsService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeID = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID);
    this.itemService.getItemByID(this.id).subscribe(gotItem => {
      console.log(gotItem);
      this.selectedItem = gotItem;
    });
  }

  doSubmit() {
    this.itemService.editItem(this.id, this.selectedItem).subscribe(edits => {
      console.log(edits);
      this.router.navigateByUrl("/items");
    })
  }

}
