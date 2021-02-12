// we want to test the following timezones
const timeZones = [
  `America/New_York`,
  `Europe/Berlin`,
  `Europe/London`,
  `Asia/Tokyo`,
]

// https://on.cypress.io/module-api
const cypress = require('cypress')
// on CI let Cypress use an appropriate environment variable
// to link separate cypress runs into a single logical run
const ciBuildId = process.env.CI ? null : Number(new Date())
let index = 0
const runTests = (timeZone) => {
  process.env.TZ = timeZone

  index += 1

  // we can remove cypress/screenshots ourselves
  return cypress.run({
    record: true,
    ciBuildId,
    group: `${index} ${timeZone}`,
    config: {
      trashAssetsBeforeRuns: false,
    },
  })
}

async function testTimeZones() {
  for await (timeZone of timeZones) {
    console.log('testing timezone %s', timeZone)
    await runTests(timeZone)
  }
}

testTimeZones().then(
  () => {
    console.log('all done')
  },
  (err) => {
    console.error(err)
    process.exit(1)
  },
)
