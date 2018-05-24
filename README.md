# [DEPRECATED]

Warning: this project is no longer maintained. Please see [pwned][pwned] for a CLI or [hibp][hibp] for Web and Node.js.

<hr>

# [hibp][hibp] microservice on [StdLib][stdlib]

_Functions for querying the '[Have I been pwned?][haveibeenpwned]' API._

* [breach](#breach)
* [breachedAccount](#breachedaccount)
* [breaches](#breaches)
* [dataClasses](#dataclasses)
* [pasteAccount](#pasteaccount)
* [pwnedPassword](#pwnedpassword)
* [search](#search)

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

```bash
$ lib wKovacs64.hibp.breach --breachName Adobe
```

Shorthand for the same request:

```bash
$ lib wKovacs64.hibp.breach Adobe
```

###### HTTP:

```http
https://wkovacs64.lib.id/hibp/breach/?breachName=Adobe
```

###### Web and Node.js:

```js
const lib = require('lib');
const { breach } = lib.wKovacs64.hibp;

breach({ breachName: 'Adobe' })
  .then(data => {
    // handle data
  })
  .catch(err => {
    // handle error
  });
```

## breachedAccount

##### Description

Fetches all breach data for an account.

##### Parameters

* `account`: a username or email address (required)
* `domain`: a domain by which to filter the results (optional, default: all
  domains)
* `truncate`: truncate the results to only include the name of each breach
  (optional, default: false)

##### Data Returned

See the [breach model][apibreachmodel] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

Return a JSON object with breach information for the specified account:

```bash
$ lib wKovacs64.hibp.breachedAccount --account foo
```

Truncate the same results to just the breach names:

```bash
$ lib wKovacs64.hibp.breachedAccount --account foo --truncate true
```

###### HTTP:

```http
https://wkovacs64.lib.id/hibp/breachedAccount/?account=foo
```

Limit to a specific domain:

```http
https://wkovacs64.lib.id/hibp/breachedAccount/?account=foo&domain=adobe.com
```

###### Web and Node.js:

```js
const lib = require('lib');
const { breachedAccount } = lib.wKovacs64.hibp;

breachedAccount({ account: 'foo' })
  .then(data => {
    // handle data
  })
  .catch(err => {
    // handle error
  });
```

## breaches

##### Description

Fetches all breach data in the system.

##### Parameters

* `domain`: a domain by which to filter the results (optional, default: all
  domains)

##### Data Returned

See the [breach model][apibreachmodel] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

```bash
$ lib wKovacs64.hibp.breaches
```

Filter by domain:

```bash
$ lib wKovacs64.hibp.breaches --domain adobe.com
```

###### HTTP:

```http
https://wkovacs64.lib.id/hibp/breaches/
```

###### Web and Node.js:

```js
const lib = require('lib');
const { breaches } = lib.wKovacs64.hibp;

breaches()
  .then(data => {
    // handle data
  })
  .catch(err => {
    // handle error
  });
```

## dataClasses

##### Description

Fetches all data classes in the system.

##### Parameters

* _none_

##### Data Returned

See the [data classes][apidataclasses] section of the API documentation for a
description of the data returned.

##### Usage

###### Command-line:

```bash
$ lib wKovacs64.hibp.dataClasses
```

###### HTTP:

```http
https://wkovacs64.lib.id/hibp/dataClasses/
```

###### Web and Node.js:

```js
const lib = require('lib');
const { dataClasses } = lib.wKovacs64.hibp;

dataClasses()
  .then(data => {
    // handle data
  })
  .catch(err => {
    // handle error
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

```bash
$ lib wKovacs64.hibp.pasteAccount --email foo@bar.com
```

Shorthand for the same request:

```bash
$ lib wKovacs64.hibp.pasteAccount foo@bar.com
```

###### HTTP:

```http
https://wkovacs64.lib.id/hibp/pasteAccount/?email=foo@bar.com
```

###### Web and Node.js:

```js
const lib = require('lib');
const { pasteAccount } = lib.wKovacs64.hibp;

pasteAccount({ email: 'foo@bar.com' })
  .then(data => {
    // handle data
  })
  .catch(err => {
    // handle error
  });
```

## pwnedPassword

##### Description

Securely fetches the number of times the given password has been exposed in a
breach. See the [Pwned Passwords][apipwnedpasswordrange] section of the API
documentation for more information.

##### Parameters

* `password`: a password as a plain text string (required)

##### Data Returned

`pwnedPassword` returns a number.

##### Usage

###### Command-line:

Return a number corresponding to the number of times the password has been
exposed in a breach:

```bash
$ lib wKovacs64.hibp.pwnedPassword --password Password1234
```

###### HTTP:

```http
https://wkovacs64.lib.id/hibp/pwnedPassword/?password=Password1234
```

###### Web and Node.js:

```js
const lib = require('lib');
const { pwnedPassword } = lib.wKovacs64.hibp;

pwnedPassword({ password: 'Password1234' })
  .then(pwnCount => {
    // handle result
  })
  .catch(err => {
    // handle error
  });
```

## search

##### Description

Fetches all breaches and all pastes associated with a given account.

##### Parameters

* `account`: a username or email address (required)
* `domain`: a domain by which to filter breach results (optional, default: all
  domains)
* `truncate`: truncate the results to only include the name of each breach
  (optional, default: false)

##### Data Returned

`search` returns a JSON object with a `breaches` key and a `pastes` key. See the
[breach model][apibreachmodel] and [paste model][apipastemodel] sections of the
API documentation (respectively) for descriptions of the values of those keys.
Each value may independently be null if no corresponding data was found.

##### Usage

###### Command-line:

Return a JSON object with breach and paste information for the specified
account:

```bash
$ lib wKovacs64.hibp.search --account foo
```

Return a JSON object with breach and paste information for the specified email
address:

```bash
$ lib wKovacs64.hibp.search --account foo@bar.com
```

###### HTTP:

```http
https://wkovacs64.lib.id/hibp/search/?account=foo
```

Limit breach data to a specific domain:

```http
https://wkovacs64.lib.id/hibp/search/?account=foo&domain=adobe.com
```

###### Web and Node.js:

```js
const lib = require('lib');
const { search } = lib.wKovacs64.hibp;

search({ account: 'foo' })
  .then(data => {
    // handle data
  })
  .catch(err => {
    // handle error
  });
```

## ✍ Author's Note

There's a good chance this project adds no value. I primarily did it as an
introduction to microservices on [StdLib][stdlib]. The current access methods
probably have superior, preexisting alternatives:

* Command-line: [pwned][pwned] is more flexible.
* HTTP: Just query the [API][api] endpoints directly?
* Web and Node.js: [hibp][hibp] powers this microservice. Use that.

[hibp]: https://github.com/wKovacs64/hibp
[pwned]: https://github.com/wKovacs64/pwned
[stdlib]: https://stdlib.com
[haveibeenpwned]: https://haveibeenpwned.com
[api]: https://haveibeenpwned.com/API/v2
[apibreachmodel]: https://haveibeenpwned.com/api/v2#BreachModel
[apidataclasses]: https://haveibeenpwned.com/API/v2#AllDataClasses
[apipastemodel]: https://haveibeenpwned.com/API/v2#PasteModel
[apipwnedpasswordrange]: https://haveibeenpwned.com/API/v2#SearchingPwnedPasswordsByRange
