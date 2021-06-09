import { Component, OnInit } from '@angular/core';
import { GostsService } from '../b29241/services/gosts.service';
@Component({
  selector: 'app-b29241',
  templateUrl: './b29241.component.html',
  styleUrls: ['./b29241.component.css']
})

export class b29241Component {
  title = 'Interface';
  gosts: any[];
  gost: any;
  TypeGosts: any[];
  b29241:string="GOST_TYPES_29241";
  constructor(private gostsService: GostsService){

  }

  async ngOnInit(){
    await this.getGosts();
  }

  async getGosts(){
    try{
      let gosts = this.gostsService.getAllGosts(this.b29241)
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
      "&id=" + encodeURIComponent(this.gost.GOST + " " + TypeGost.NUMBER); //id будет формироваться как номергоста_номердетали
      //это строго необходимо, т.к. при импорте детали, eсли id у деталей равны, он просто делает копию, и они связаны становятся
      //сейчас это тек.дата как временная заглушка
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


