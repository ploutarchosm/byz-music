import { Component } from '@angular/core';
import { ByzPageComponent } from '@components/byz-page/byz-page.component';

@Component({
  selector: 'app-byz-editor',
  standalone: true,
  imports: [ByzPageComponent],
  templateUrl: './byz-editor.component.html',
  styleUrl: './byz-editor.component.scss',
})
export class ByzEditorComponent {}
