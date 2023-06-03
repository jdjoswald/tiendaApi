import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards: { id: number; imageUrl: string; description: string }[] = [];

  constructor() {
    for (let i = 1; i <= 9; i++) {
      this.cards.push({
        id: i,
        imageUrl: `https://picsum.photos/200?random=${i}`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed euismod dui sit amet dui mollis hendrerit. Nulla facilisi. 
        Donec euismod suscipit tellus, in sagittis quam fringilla eu. 
        Sed tempus, justo nec vestibulum commodo, libero eros congue nisl, 
        in elementum massa quam sit amet felis.`
      });
    }
  }

}
