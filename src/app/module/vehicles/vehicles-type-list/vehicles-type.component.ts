import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { VehiclesTypeService } from '../../../services/vehicles-type.service';

@Component({
  selector: 'app-vehicles-type',
  templateUrl: './vehicles-type.component.html',
  styleUrls: ['./vehicles-type.component.scss']
})
export class VehiclesTypeComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'model', 'capacity', 'dimension',  'action'];
  vehiclesTypeTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private typeEntityService : VehiclesTypeService
  ) { }

  ngOnInit(): void {
    this.vehicleTypeList();
  }


  ngAfterViewInit() {
    this.vehiclesTypeTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vehiclesTypeTable.filter = filterValue.trim().toLowerCase();
  }

  vehicleTypeList(){
    this.typeEntityService.VehiclesTypeList().subscribe(
      (res: any)=>{
        console.log(res);
        this.vehiclesTypeTable = new MatTableDataSource<interfacTableData>(res);
        console.log(this.vehiclesTypeTable.filteredData);
        this.vehiclesTypeTable.sort = this.sort;
        this.vehiclesTypeTable.paginator = this.paginator;
      },(error)=>{
        console.log(error);
      }
    )
  }
  view(id){

  }
  delete(id){

  }

}

export interface interfacTableData {
  id: number;
  model: string;
  capacity: string;
  dimension: string;
}
const tableData: interfacTableData[] = [
  
];
