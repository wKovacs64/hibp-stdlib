# [hibp][hibp]-driven microservice for [stdlib][stdlib]

*Functions for querying the '[Have I been pwned?][haveibeenpwned]' API.*

### breachedAccount - fetches all breach data for an account

##### Parameters

* `account`: a username or email address (required)
* `domain`: a domain by which to filter the results (optional, default: all domains)
* `truncate`: truncate the results to only include the name of each breach (optional, default: false)

##### Data Returned

See the [breach model][apibreachmodel] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

Return a JSON object with breach information for the specified account:

```bash
$ f wKovacs64/hibp/breachedAccount --account foo
```

Truncate the same results to just the breach names:

```bash
$ f wKovacs64/hibp/breachedAccount --account foo --truncate true
```

###### HTTP:

Return a JSON object with breach information for the specified account:

```http
https://f.stdlib.com/wKovacs64/hibp/breachedAccount?account=foo
```

Return a JSON object with breach information for the specified account, limited
to a specific domain:

```http
https://f.stdlib.com/wKovacs64/hibp/breachedAccount?account=foo&domain=adobe.com
```

###### Web and Node.js:

```js
const f = require('f');
const breachedAccount = f('wKovacs64/hibp/breachedAccount');

breachedAccount({ account: 'foo' }, (err, data) => {
  // handle error or JSON data
});
```

### breaches - fetches all breach data in the system

##### Parameters

* `domain`: a domain by which to filter the results (optional, default: all domains)

##### Data Returned

See the [breach model][apibreachmodel] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

Return a JSON object with all breach data:

```bash
$ f wKovacs64/hibp/breaches
```

Filter the results by domain:

```bash
$ f wKovacs64/hibp/breaches --domain adobe.com
```

###### HTTP:

Return a JSON object with all breach data:

```http
https://f.stdlib.com/wKovacs64/hibp/breaches
```

###### Web and Node.js:

```js
const f = require('f');
const breaches = f('wKovacs64/hibp/breaches');

breaches({}, (err, data) => {
  // handle error or JSON data
});
```

[hibp]: https://github.com/wKovacs64/hibp
[stdlib]: https://stdlib.com
[haveibeenpwned]: https://haveibeenpwned.com
[apibreachmodel]: https://haveibeenpwned.com/api/v2#BreachModel
