import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-raju',
  standalone: false,
  templateUrl: './raju.component.html',
  styleUrls: ['./raju.component.css']
})
export class RajuComponent {
m = '';
message='';
sender='raju';
  constructor(public ms:ServiceService){}
  send() {
    this.ms.addMsg(this.m,this.sender);
    this.m='';
  }
recive(){
   const msgData=this.ms.receiveMsg();
   this.message=msgData.message;
   this.sender=msgData.sender;
}
 
  }

