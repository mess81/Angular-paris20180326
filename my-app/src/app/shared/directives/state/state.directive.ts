import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {
  @Input() appState: string;
  @HostBinding('class') nameClass;
  constructor() { }
  ngOnInit(): void {
    this.nameClass = this.formatClass(this.appState);
  }
  private removeAccents(state: string): string {
    // https://stackoverflow.com/a/37511463
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatClass(state: string): string {
    return `state-${this.removeAccents(state)
      .toLowerCase()
      .replace(' ', '')}`;
  }
}

