import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberToWordsService {

  
    private ones: string[] = ['', 'एक', 'दोन', 'तीन', 'चार', 'पाच', 'सहा', 'सात', 'आठ', 'नऊ'];
    private teens: string[] = ['अकरा', 'बारा', 'तेरा', 'चौदा', 'पंधरा', 'सोळा', 'सतरा', 'अठरा', 'एकोणीस'];
    private tens: string[] = ['', 'दहा', 'वीस', 'तीस', 'चाळीस', 'पन्नास', 'साठ', 'सत्तर', 'ऐंशी', 'नव्वद'];
    private thousands: string[] = ['', 'हजार', 'लाख', 'कोटी', 'अब्ज'];
  
    convertToWords(num: number): string {
      if (num === 0) {
        return 'शून्य';
      }
  
      let words = '';
  
      let i = 0;
      while (num > 0) {
        if (num % 1000 !== 0) {
          words = this.convertHundreds(num % 1000) + this.thousands[i] + ' ' + words;
        }
        num = Math.floor(num / 1000);
        i++;
      }
  
      return words.trim();
    }
  
    private convertHundreds(num: number): string {
      let words = '';
  
      if (num > 99) {
        words += this.ones[Math.floor(num / 100)] + 'शे ';
        num = num % 100;
      }
  
      if (num > 10 && num < 20) {
        words += this.teens[num - 11] + ' ';
      } else {
        words += this.tens[Math.floor(num / 10)] + ' ';
        num = num % 10;
        words += this.ones[num] + ' ';
      }
  
      return words;
    }
  }