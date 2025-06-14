import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-rani',
  standalone: false,
  templateUrl: './rani.component.html',
  styleUrls: ['./rani.component.css']
})
export class RaniComponent {
  message='';
  sender='';
  m='';
  constructor(public ms:ServiceService){} 
  receive(){
    const msgData=this.ms.receiveMsg();
    this.message=msgData.message;
    this.sender=msgData.sender;
  }
  sender1(){
    this.ms.addMsg(this.m,this.sender);
    this.m=this.sender
  }
}
  