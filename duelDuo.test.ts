import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('to check that the see all bots button is working correctly', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();

    const botDiv = await driver.findElement(By.xpath('//div[@id="choices"]'));

    const botsShowing = botDiv.isDisplayed();
    expect(botsShowing).toBeTruthy();

    await driver.sleep(2000)
})

test('to check that clicking add to duo button displays the div with the right id', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click();

    const added = await driver.findElement(By.xpath('//div[@class="player-duo"]'))

    const botAdded = added.isDisplayed();
    expect(botAdded).toBeTruthy();
})