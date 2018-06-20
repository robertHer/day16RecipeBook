import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'header-lmnt',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  selectFeature(feature: string) {
      // pass feature to app component here
      this.featureSelected.emit(feature);
}

}
