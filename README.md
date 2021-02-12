# test-timezones-example [![test-timezones-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/7n3hov&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/7n3hov/runs)
> Example of testing the same browser page in different timezones

## Timezones

- `America/New_York`
- `Europe/Berlin`
- `Europe/London`
- `Asia/Tokyo`

To run Cypress test in different timezone, use

```shell
$ <timezone> npx cypress open
# for example
$ TZ=Asia/Tokyo npx cypress open
```
