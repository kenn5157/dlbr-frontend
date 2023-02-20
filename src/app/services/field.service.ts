import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Field } from 'src/assets/field';
import { MessageService } from './message.service';

@Injectable({
	providedIn: 'root'
})
export class FieldService {

	private fieldUrl = "https://localhost:5001/field";

	constructor(private http: HttpClient, private messageService: MessageService) { }

	private log(message: string) {
		this.messageService.add(`FieldService: ${message}`);
	}

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}

	// Get's all fields from database
	getFields(): Observable<Field[]> {
		return this.http.get<Field[]>(this.fieldUrl).pipe(
			tap(_ => this.log(`fetched fields`)),
			catchError(this.handleError<Field[]>(`getFields`, []))
		);
	}
	// Adds new field to database
	addField(field: Field): Observable<Field> {
		return this.http.post<Field>(this.fieldUrl, field, this.httpOptions).pipe(
			tap((newField: Field) => this.log(`added field w/ id=${newField.id}`)),
			catchError(this.handleError<Field>('addField'))
		);
	}
}
