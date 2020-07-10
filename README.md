# Networkapi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Networkapi methods

* listWithSL(reqOptions:reqOptions):BehaviourSubject(records) - used to pull records from server by passing skip and limit value
```
interface reqOptions {
	skip: number
	limit: number
	baseUrl: string
	auto: boolean
}
```

```
interface resObj {
	skip: number
	limit: number
	records: number
	data: []
}
```

```
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
```

```
this._api.listWithSL({skip:0,limit:5,baseUrl:'http://localhost:3000/books',auto:false})
  .subscribe(books=>{
    console.log('--->',books)
    this.books = this.books.concat(books)
  })
```

