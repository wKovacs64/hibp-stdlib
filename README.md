# [hibp][hibp] microservice on [stdlib][stdlib]

*Functions for querying the '[Have I been pwned?][haveibeenpwned]' API.*

* [breachedAccount](#breachedaccount)
* [breaches](#breaches)
* [breach](#breach)
* [dataClasses](#dataclasses)
* [pasteAccount](#pasteaccount)

## breachedAccount

##### Description

Fetches all breach data for an account.

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

## breaches

##### Description

Fetches all breach data in the system.

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

## breach

##### Description

Fetches breach data for a single breach.

##### Parameters

* `breachName`: the name of a breach in the system

##### Data Returned

See the [breach model][apibreachmodel] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

Return a JSON object with breach information for the specified breach:

```bash
$ f wKovacs64/hibp/breach --breachName Adobe
```

Shorthand for the same request:

```bash
$ f wKovacs64/hibp/breach Adobe
```

###### HTTP:

```http
https://f.stdlib.com/wKovacs64/hibp/breach?breachName=Adobe
```

###### Web and Node.js:

```js
const f = require('f');
const breach = f('wKovacs64/hibp/breach');

breach({ breachName: 'Adobe' }, (err, data) => {
  // handle error or JSON data
});
```

## dataClasses

##### Description

Fetches all data classes in the system.

##### Parameters

* *none*

##### Data Returned

See the [data classes][apidataclasses] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

Return a JSON object with all data classes:

```bash
$ f wKovacs64/hibp/dataClasses
```

###### HTTP:

```http
https://f.stdlib.com/wKovacs64/hibp/dataClasses
```

###### Web and Node.js:

```js
const f = require('f');
const dataClasses = f('wKovacs64/hibp/dataClasses');

dataClasses({}, (err, data) => {
  // handle error or JSON data
});
```

## pasteAccount

##### Description

Fetches all pastes for an email address.

##### Parameters

* `email`: the email address to query (required)

##### Data Returned

See the [paste model][apipastemodel] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

Return a JSON object with paste information for the specified account:

```bash
$ f wKovacs64/hibp/pasteAccount --email foo@bar.com
```

Shorthand for the same request:

```bash
$ f wKovacs64/hibp/pasteAccount foo@bar.com
```

###### HTTP:

Return a JSON object with paste information for the specified account:

```http
https://f.stdlib.com/wKovacs64/hibp/pasteAccount?email=foo@bar.com
```

###### Web and Node.js:

```js
const f = require('f');
const pasteAccount = f('wKovacs64/hibp/pasteAccount');

pasteAccount({ email: 'foo@bar.com' }, (err, data) => {
  // handle error or JSON data
});
```

[hibp]: https://github.com/wKovacs64/hibp
[stdlib]: https://stdlib.com
[haveibeenpwned]: https://haveibeenpwned.com
[apibreachmodel]: https://haveibeenpwned.com/api/v2#BreachModel
[apidataclasses]: https://haveibeenpwned.com/API/v2#AllDataClasses
[apipastemodel]: https://haveibeenpwned.com/API/v2#PasteModel
