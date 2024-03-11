import { Component } from '@angular/core';

interface Color {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedColor: string
  title = 'DismasDemo';
  colors: Color[] = [
    {value: 'red', viewValue: 'Red'},
    {value: 'blue', viewValue: 'Blue'},
    {value: 'green', viewValue: 'Green'},
    {value: 'aqua', viewValue: 'Aqua'},

  ];


  divStyles: any = {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100%',
    'height': '100%',
    'backgroundColor': 'white'
  };

  changeColor() {
    console.log("Hello World")
    this.divStyles.backgroundColor = this.selectedColor;
  }



}
