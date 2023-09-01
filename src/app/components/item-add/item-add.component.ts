import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/models/items';
import { ItemsService } from 'src/app/services/items.service';


@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {

  newItem: Items = new Items();

  constructor(private itemService: ItemsService, private router: Router) { }

  ngOnInit(): void{
  }

  onSubmit() {
    this.itemService.AddItem(this.newItem).subscribe(thing => {
      console.log(thing);
      this.router.navigateByUrl("/items");
    })
  }

}
