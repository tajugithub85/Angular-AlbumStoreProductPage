import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class ProductService {
  private _producturl = 'app/products.json';
  constructor(private _http: Http) { }
   
   
}     
