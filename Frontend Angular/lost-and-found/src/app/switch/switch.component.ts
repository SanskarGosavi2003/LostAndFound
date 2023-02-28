import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  onToggleChange(event: MatSlideToggleChange) {
    const isChecked = event.checked;
    console.log(`Toggle button state: ${isChecked ? 'ON' : 'OFF'}`);
  }

}
