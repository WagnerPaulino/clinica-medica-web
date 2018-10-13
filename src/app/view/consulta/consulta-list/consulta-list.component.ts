import { Consulta } from './../../../domain/consulta';
import { Component, OnInit, HostListener } from '@angular/core';
import { ConsultaService } from '../../../services/consulta.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {
  public consultas: Array<Consulta> = [];
  consultaSearch = new FormControl();
  filteredOptions: Observable<Consulta[]>;

  constructor(private consultaService: ConsultaService) {
    this.consultaService.findAll().subscribe((consultas => {
      this.consultas = consultas;
      this.filterAll();
    }));
  }

  ngOnInit() {
    this.filterAll();
  }

  atualizarLista(event) {
    this.consultaService.findAll().subscribe((r: any) => {
      this.consultas = r;
      this.filterAll();
    });
  }

  filterAll() {
    this.filteredOptions = this.consultaSearch.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(name?: String): Consulta[] {
    if (name === undefined || name === null) {
      name = '';
    }
    const filterValue = name.toLowerCase();
    return this.consultas.filter(option => option.exame.toLowerCase().indexOf(filterValue) === 0);
  }
}
