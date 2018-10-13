import { Paciente } from './../../../domain/paciente';
import { Component, OnInit, HostListener } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  public pacientes: Array<Paciente> = [];
  pacienteSearch = new FormControl();
  filteredOptions: Observable<Paciente[]>;

  constructor(private pacienteService: PacienteService) {
    this.pacienteService.findAll().subscribe((pacientes => {
      this.pacientes = pacientes;
      this.filterAll();
    }));
  }

  ngOnInit() {
    this.filterAll();
  }

  atualizarLista(event) {
    this.pacienteService.findAll().subscribe((r: any) => {
      this.pacientes = r;
      this.filterAll();
    });
  }

  filterAll() {
    this.filteredOptions = this.pacienteSearch.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(name: String): Paciente[] {
    if (name === undefined) {
      name = '';
    }
    const filterValue = name.toLowerCase();
    return this.pacientes.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }
}
