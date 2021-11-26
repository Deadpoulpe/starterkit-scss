import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'
/**
 * Service de copier
 */
@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor(
    private clipboardService: ClipboardService
  ) { }

  copy(text: string){
    this.clipboardService.copy(text)
  }
}