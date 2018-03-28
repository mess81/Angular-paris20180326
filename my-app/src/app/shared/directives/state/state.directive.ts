import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') nameClass;
  constructor() { }
  ngOnChanges(): void {
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

