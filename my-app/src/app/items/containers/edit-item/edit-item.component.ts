import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: Item;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => this.item = data['item']);
    console.log(this.item);
    // souscrire a params pour recupere dans le router l'item transmis par mon resolve
    // c'est cette valeur recupere ici que je bind avec l' @Input
  }

}
