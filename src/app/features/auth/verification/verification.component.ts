import { Component } from '@angular/core';

// ✅ Renomeie o import para evitar conflito


@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [],  // Usa o nome renomeado
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent { }  // Nome único
