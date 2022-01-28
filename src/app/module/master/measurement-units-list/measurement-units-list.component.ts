import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { MeasurementUnitsService } from '../../../services/measurement-units.service';

import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-measurement-units-list',
  templateUrl: './measurement-units-list.component.html',
  styleUrls: ['./measurement-units-list.component.scss']
})
export class MeasurementUnitsListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'unit', 'action'];
  measurmentUnitsTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private measurementUnitsService : MeasurementUnitsService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.measurementUnitsList();
    
  }

  measurementUnitsList(){
    this.measurementUnitsService.measurementUnitsList().subscribe(
      (success:any)=>{
        console.log(success);
        this.measurmentUnitsTable = new MatTableDataSource<interfacTableData>(success);
        console.log(this.measurmentUnitsTable.filteredData);
        this.measurmentUnitsTable.sort = this.sort;
        this.measurmentUnitsTable.paginator = this.paginator;
      },(error)=>{
        console.log(error);
        
      }
    )
  }

  ngAfterViewInit() {
    this.measurmentUnitsTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.measurmentUnitsTable.filter = filterValue.trim().toLowerCase();
  }
  delete(id){
    console.log(id);
    this.measurementUnitsService.measurementUnitsdelete(id).subscribe(
      (success)=>{
        console.log(success);
        this.measurementUnitsList();
      },(error)=>{
        console.log(error);
        
      }
    )
    
  }
  edit(id){
    console.log(id);
    let navigateId: NavigationExtras = {
      queryParams:{
        measurementId: id,
      }
    }
    this._router.navigate(['/dashboard/master/measurementUnitsEntity'], navigateId)
  }
}

export interface interfacTableData {
  id: number;
  unit: string;
}
const tableData: interfacTableData[] = [];
