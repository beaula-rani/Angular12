import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private msg='';
  private sender='';
  addMsg(message:string,sender:string){
    this.msg=message;
    this.sender=sender;

  }
  receiveMsg(){
    return{message:this.msg,sender:this.sender};
  }
}

  