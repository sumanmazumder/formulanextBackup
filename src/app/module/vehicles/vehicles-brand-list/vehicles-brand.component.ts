import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { VehicleBrandService } from '../../../services/vehicle-brand.service';

@Component({
  selector: 'app-vehicles-brand',
  templateUrl: './vehicles-brand.component.html',
  styleUrls: ['./vehicles-brand.component.scss']
})
export class VehiclesBrandComponent implements AfterViewInit  {
  displayedColumns: string[] = ['id', 'name', 'action'];
  // dataSource = new MatTableDataSource<PeriodicElement>(tableData);
  brandTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private vehicleBrandService: VehicleBrandService
  ) { }

  ngOnInit(): void {
    this.brantList();
  }

  brantList(){
    this.vehicleBrandService.brandList().subscribe(
      (success:any)=>{
        console.log(success);
        this.brandTable = new MatTableDataSource<interfacTableData>(success);
        console.log(this.brandTable.filteredData);
        this.brandTable.sort = this.sort;
        this.brandTable.paginator = this.paginator;
      },(error)=>{
        console.log(error);
      }
    )
  }
  ngAfterViewInit() {
    this.brandTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.brandTable.filter = filterValue.trim().toLowerCase();
  }
  delete(id){
    console.log(id);
    this.vehicleBrandService.brandDelete(id).subscribe(
      (success)=>{
        console.log(success);
        this.brantList();
      },(error)=>{
        console.log(error);
        
      }
    )
  }
  view(id){

  }
}
export interface interfacTableData {
  id: number;
  name: string;
}
const tableData: interfacTableData[] = [
  // {id: 1, name: 'Hydrogen'},
];
