import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  itemsCollection: AngularFirestoreCollection<Item>;
  private _collection$: Observable<Item[]>;
  // Subject
  // private _collection$: Subject<Item[]> = new Subject<Item[]>;
  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();
  }
    // get colection
    get collection$(): Observable<Item[]> {
      return this._collection$;
    }
    // set collection
    set collection$(collection: Observable<Item[]>) {
      this._collection$ = collection;
    }
    // add Item
    addItem(item: Item): void {
      item.id = this.db.createId();
      this.itemsCollection.doc(item.id).set(item)
        .catch(error => console.log(error));
    }
    // get data on item

    getItem(id: string): Observable<Item> {
      const item = this.db.doc<Item>(`collection/${id}`).valueChanges();
      return item;
    }
    // update Item
    update(item: Item): void {
      this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
    }
    // delete Item
    delete(item: Item): void {
      this.itemsCollection.doc(item.id).delete()
        .catch(error => console.log(error));
    }
}
// recuperer id passer dans url via le router
// apres avoir recuperer les donnees grace a la methode getItem de notre service
// envoyer ces donnees a formComponent
