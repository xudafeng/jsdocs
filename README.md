jsdocs
===

> A doc generator, written in markdown for speed.

## Installment

```bash
$ npm install jsdocs -g
```

## Quick Start

```bash
$ jsdocs build ./src ./dist
```

##  User Guide
* ### Name
	* File name, e.g., index.json

* ### Type
	* Whether it is a *synchronous* or *asynchronous* request

* ### Request
	* Request Params including parameter type, e.g, string or boolean
	* `*` indicates compulsory

* ### Response
	* success: boolean type, indicates request is successful (true) or not (false)
	* errorCode: user defined error code, applies if request failed
	* data - *array type*
		* title: field name
		* content: field value


> You may refer to [index.md](https://raw.githubusercontent.com/xudafeng/jsdocs/master/benchmark/src/index.md)

## License

The MIT License (MIT)
