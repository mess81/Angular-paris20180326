import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
 libelles = Object.values(State);
 @Output() nItem: EventEmitter<Item> = new EventEmitter();
 @Input() item: Item;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: [
        this.item ? this.item.name : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
        ],
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
        ],
      state: this.item ? this.item.state : State.ALIVRER
    });
  }

  process(): void {
    this.nItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

formValid(champ: string): Boolean {
  return this.form.get(champ).invalid && this.form.get(champ).touched;
}
}
