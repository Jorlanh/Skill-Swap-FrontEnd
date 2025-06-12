import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// CAMINHO CORRIGIDO
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
})
export class MarketplaceComponent implements OnInit {
  skills: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/skills`).subscribe(data => {
      this.skills = data;
    });
  }
}
