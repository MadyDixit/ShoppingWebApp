import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showMsg: String = '';
  /**
   * Cart
   */
  public Cart() {
      this.showMsg = "Successfully Inserted";
  }
  title = 'Flipkart';
}
