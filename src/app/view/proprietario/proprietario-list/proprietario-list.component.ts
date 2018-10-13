import { Proprietario } from './../../../domain/proprietario';
import { Component, OnInit, HostListener } from '@angular/core';
import { ProprietarioService } from '../../../services/proprietario.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-proprietario-list',
  templateUrl: './proprietario-list.component.html',
  styleUrls: ['./proprietario-list.component.css']
})
export class ProprietarioListComponent implements OnInit {
  public proprietarios: Array<Proprietario> = [];
  proprietarioSearch = new FormControl();
  filteredOptions: Observable<Proprietario[]>;

  constructor(private proprietarioService: ProprietarioService) {
    this.proprietarioService.findAll().subscribe((proprietarios => {
      this.proprietarios = proprietarios;
      this.filterAll();
    }));
  }

  ngOnInit() {
    this.filterAll();
  }

  atualizarLista(event) {
    this.proprietarioService.findAll().subscribe((r: any) => {
      this.proprietarios = r;
      this.filterAll();
    });
  }

  filterAll() {
    this.filteredOptions = this.proprietarioSearch.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(name: String): Proprietario[] {
    if (name === undefined) {
      name = '';
    }
    const filterValue = name.toLowerCase();
    return this.proprietarios.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }
}
