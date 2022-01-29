import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { MeasurementUnitsService } from '../../../services/measurement-units.service';
import { LicenceClassService } from '../../../services/licence-class.service';

import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-licence-class-list',
  templateUrl: './licence-class-list.component.html',
  styleUrls: ['./licence-class-list.component.scss']
})
export class LicenceClassListComponent implements AfterViewInit {
  public totalLength : number;
  public loader:boolean = true;


  displayedColumns: string[] = ['id', 'className', 'status', 'associatedWeight', 'action'];
  licenceClassTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private licenceClassService: LicenceClassService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.licenceList();
  }
  licenceList(){
    // this.loaderService.requestStarted();
    this.licenceClassService.licenceClassList().subscribe(
      (success: any)=>{
        this.totalLength = success.length;
        this.loader = false;
        // console.log(success.length);
        // this.loaderService.requestEnded();
        this.licenceClassTable = new MatTableDataSource<interfacTableData>(success);
        console.log(this.licenceClassTable.filteredData);
        this.licenceClassTable.sort = this.sort;
        this.licenceClassTable.paginator = this.paginator;
      },(error)=>{
        console.log(error);
      }
    )
  }

  ngAfterViewInit() {
    this.licenceClassTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.licenceClassTable.filter = filterValue.trim().toLowerCase();
  }
  delete(id){
    console.log(id);
    this.licenceClassService.licenceClassDelete(id).subscribe(
      (success)=>{
        console.log(success);
        this.licenceList();
      },(error)=>{
        console.log(error);
        
      }
    )
    
  }
  edit(id){
    // console.log(id);
    let passData: NavigationExtras = {
      queryParams:{
        'licenceClassId': id,
      }
    }
    this._router.navigate(['/dashboard/master/licenceClassEntity'], passData)
  }
}

export interface interfacTableData {
  id: number;
  className: string;
  status: boolean;
  associatedWeight: number
}
const tableData: interfacTableData[] = [
  // {id: 1, name: 'Hydrogen'},
];
