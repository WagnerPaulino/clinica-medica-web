import { Medico } from './../../../domain/medico';
import { Component, OnInit, HostListener } from '@angular/core';
import { MedicoService } from '../../../services/medico.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {
  public medicos: Array<Medico> = [];
  medicoSearch = new FormControl();
  filteredOptions: Observable<Medico[]>;

  constructor(private medicoService: MedicoService) {
    this.medicoService.findAll().subscribe((medicos => {
      this.medicos = medicos;
      this.filterAll();
    }));
  }

  ngOnInit() {
    this.filterAll();
  }

  atualizarLista(event) {
    this.medicoService.findAll().subscribe((r: any) => {
      this.medicos = r;
      this.filterAll();
    });
  }

  filterAll() {
    this.filteredOptions = this.medicoSearch.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(name: String): Medico[] {
    if (name === undefined) {
      name = '';
    }
    const filterValue = name.toLowerCase();
    return this.medicos.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }
}
