// we want to test the following timezones
const timeZones = [
  `America/New_York`,
  `Europe/Berlin`,
  `Europe/London`,
  `Asia/Tokyo`,
]

// https://on.cypress.io/module-api
const cypress = require('cypress')

const runTests = (timeZone) => {
  process.env.TZ = timeZone

  // we can remove cypress/screenshots ourselves
  return cypress.run({
    record: true,
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
