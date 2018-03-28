import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { RouterModule } from '@angular/cli';
import { EditItemComponent } from './containers/edit-item/edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [
    ListItemsComponent,
    ItemComponent,
    AddItemComponent,
    EditItemComponent
  ]
})
export class ItemsModule { }
