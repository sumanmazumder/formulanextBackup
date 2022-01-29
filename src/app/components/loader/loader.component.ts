import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showSpinner = false;

  public row :string[]= [];
  public column :string[]= [];
  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef
  ) { 
    
  }

  ngOnInit(): void {
    this.Init();
  }

  Init(){
    this.loaderService.getSpinnerObervable().subscribe(
      (status)=>{
        this.showSpinner = status == "start";
        this.cdRef.detectChanges();
      }
    )
  }
}
