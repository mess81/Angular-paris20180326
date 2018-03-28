import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../collection/collection.service';

@Injectable()
export class EditRevolveService implements Resolve<Observable<Item>> {

  constructor(private collectionService: CollectionService,
               private router: Router) { }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const id = route.paramMap.get('id');
    return this.collectionService.getItem(id).map((data) => {
      console.log(data);
      if (data) {
        return data;
      } else {
        this.router.navigate(['items/list']);
      }
    });
  }

}
