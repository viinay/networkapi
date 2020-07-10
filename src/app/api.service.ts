import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

interface reqOptions {
	skip: number
	limit: number
	baseUrl: string
	auto: boolean
}

interface resObj {
	skip: number
	limit: number
	records: number
	data: []
}

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private _http: HttpClient
	) { }

	listWithSL(reqOptions: reqOptions) {
		const bs = new BehaviorSubject([]);

		const next = (skip, limit, baseUrl, auto) => {
			this._http.get(baseUrl, { params: { skip: skip, limit: limit } })
				.subscribe((books: resObj) => {
					bs.next(books.data)
					skip = (skip + limit);
					console.log('new skip :', skip)
					if (auto && (skip < books.records)) {
						next(skip, limit, baseUrl,auto)
					}
				})
		}

		next(reqOptions.skip, reqOptions.limit, reqOptions.baseUrl, reqOptions.auto)
		return bs;
	}
}
