import { Component, OnInit } from '@angular/core';
import { GostsService } from './services/gosts.service';

@Component({
  selector: 'app-b8000n',
  templateUrl: './b8000n.component.html',
  styleUrls: ['./b8000n.component.css']
})


export class b8000nComponent {
  title = 'Interface';
  gosts: any[];
  gost: any;
  TypeGosts: any[];
  searchStr='8000Н'
  constructor(private gostsService: GostsService){

  }

  async ngOnInit(){
    await this.getGosts();
  }
 
  async getGosts(){
    try{
      let gosts = this.gostsService.getAllGosts()
      this.gosts =  await gosts;  
    }
    catch(err){
      console.error(err);
    }
  }

  async getTypeGOSTS(gost){
    this.gost = gost;
    try{
      let TypeGosts = this.gostsService.getGostParams(gost.GOST,gost.ID)
      this.TypeGosts =  await TypeGosts;
    }
    catch(err){
      console.error(err); 
    }
  }

  insertFile(TypeGost: any) {
    console.log(TypeGost);
    var properties = {
      "PartNumber": "",
      "PartName": this.gost.GOST + " " + TypeGost.NUMBER,
      "Description": ""
    }
    window.location.href = "fusion360://command=insert&file=" + encodeURIComponent(this.gost.MODEL_URL) +
      "&properties=" + encodeURIComponent(JSON.stringify(properties)) +
      "&privateInfo=" + encodeURIComponent(this.setString(TypeGost)) +
      "&id=" + encodeURIComponent(this.gost.GOST + " " + TypeGost.NUMBER); 
  }

  setString(TypeGost) {
    var str = 
        TypeGost.d + "/" +
      + TypeGost.Dmax + "/" +
      + TypeGost.Dmax2 + "/" +
      + TypeGost.d2 + "/" +
      + TypeGost.H + "/" +
      + TypeGost.r + "/" +
      + TypeGost.a + "/" +
      + TypeGost.f
    return str;
  }
}
