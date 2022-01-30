import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnChanges {

  showSpinner = false;
  @Input() chandan : any;
  public row :any[]= [1,2,3,4,5];
  public column :any[]= [1,2,3,4,5];
  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef
  ) { 
    console.log(this.chandan);
  }

  ngOnInit(): void {
    console.log(this.chandan);
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(this.chandan);
    
    console.log("changes", changes);

  }
  
}
