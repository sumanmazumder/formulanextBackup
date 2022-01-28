import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { VehiclesVariantService } from '../../../services/vehicles-variant.service';
@Component({
  selector: 'app-vehicles-variant',
  templateUrl: './vehicles-variant.component.html',
  styleUrls: ['./vehicles-variant.component.scss']
})
export class VehiclesVariantComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  vehiclesVarientTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private vehiclesVariantService: VehiclesVariantService,
  ) { }

  ngOnInit(): void {
    this.vehiclesVariantList();
  }
  
  ngAfterViewInit() {
    this.vehiclesVarientTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vehiclesVarientTable.filter = filterValue.trim().toLowerCase();
  }

  vehiclesVariantList(){
    this.vehiclesVariantService.vehiclesVariantList().subscribe(
      (success:any)=>{
        console.log(success);
        this.vehiclesVarientTable = new MatTableDataSource<interfacTableData>(success);
        console.log(this.vehiclesVarientTable.filteredData);
        this.vehiclesVarientTable.sort = this.sort;
        this.vehiclesVarientTable.paginator = this.paginator;
      },(error)=>{
        console.log(error);
        
      }
    )
  }
  delete(id){
    console.log(id);
    
    this.vehiclesVariantService.vehiclesVariantDelete(id).subscribe(
      (success)=>{
        console.log(success);
        this.vehiclesVariantList();
      },(error)=>{
        console.log(error);
        
      }
    )
  }
  view(){}
}

export interface interfacTableData {
  id: number;
  name: string;
}
const tableData: interfacTableData[] = [];