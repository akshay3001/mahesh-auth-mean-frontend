import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  private _registerUrl = 'http://localhost:3008/api/register';

  constructor(private _http:HttpClient) { }

  registerU(user){
    return this._http.post<any>(this._registerUrl, user)
  }
}
