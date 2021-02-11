# test-timezones-example
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
