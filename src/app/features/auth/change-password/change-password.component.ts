import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // É uma boa prática ter o CommonModule
import { FormsModule } from '@angular/forms'; // <-- 1. IMPORTE O FormsModule AQUI

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // <-- 2. ADICIONE O FormsModule AOS IMPORTS DO COMPONENTE
  ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  
  // QueryList para pegar todos os elementos #otpInput do template
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  // Array para armazenar os valores de cada campo do código
  otpCode: string[] = Array(6).fill('');
  
  constructor() { }

  /**
   * Chamado quando o usuário digita em um dos campos.
   * Move o foco para o próximo campo se um caractere for digitado.
   */
  onInput(index: number): void {
    const inputEl = this.otpInputs.get(index)?.nativeElement;
    
    // Se o campo atual foi preenchido e não é o último campo
    if (inputEl.value.length === 1 && index < this.otpCode.length - 1) {
      // Move o foco para o próximo input
      const nextEl = this.otpInputs.get(index + 1)?.nativeElement;
      if (nextEl) {
        nextEl.focus();
      }
    }
  }

  /**
   * Chamado quando uma tecla é pressionada.
   * Usado para lidar com o Backspace e mover o foco para trás.
   */
  onKeyUp(event: KeyboardEvent, index: number): void {
    // Se a tecla Backspace for pressionada no campo vazio e não for o primeiro campo
    if (event.key === 'Backspace' && this.otpCode[index] === '' && index > 0) {
      // Move o foco para o input anterior
      const prevEl = this.otpInputs.get(index - 1)?.nativeElement;
      if (prevEl) {
        prevEl.focus();
      }
    }
  }

  /**
   * Chamado quando o formulário é enviado.
   */
  onSubmit(): void {
    // Junta os valores do array para formar o código completo
    const fullCode = this.otpCode.join('');
    
    console.log('Código de verificação enviado:', fullCode);

    // TODO: Adicionar a lógica para enviar o código para o AuthService
    if (fullCode.length === 6) {
      alert(`Código a ser verificado: ${fullCode}`);
      // this.authService.verifyCode(fullCode).subscribe(...)
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
