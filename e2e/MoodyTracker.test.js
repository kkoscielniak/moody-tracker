/* global device element by */
describe('MoodyTracker', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should start with Home Screen', async () => {
    await expect(element(by.text('Recent Moodies 😉'))).toBeVisible();
    await expect(element(by.id('NewEntryTile'))).toBeVisible();
  });

  it('should add new Moody', async () => {
    // when
    await element(by.id('NewEntryTile')).tap();
    await element(by.id('MoodLevelButton_5')).tap();
    await element(by.id('FeelingButton_happy')).tap();
    await element(by.text('Add')).tap();

    // then
    await expect(element(by.text('Recent Moodies 😉'))).toBeVisible();
    await expect(element(by.id('EntryTile'))).toBeVisible();
    await expect(element(by.id('TileContent_5'))).toBeVisible();
  });

  it.only('should render `StatBar`s with proper values', async () => {
    // when
    await element(by.id('NewEntryTile')).tap();
    await element(by.id('MoodLevelButton_5')).tap();
    await element(by.id('FeelingButton_happy')).tap();
    await element(by.text('Add')).tap();

    await element(by.id('NewEntryTile')).tap();
    await element(by.id('MoodLevelButton_4')).tap();
    await element(by.id('FeelingButton_content')).tap();
    await element(by.id('FeelingButton_happy')).tap();
    await element(by.text('Add')).tap();

    // then
    await expect(element(by.text('Content'))).toBeVisible();
    await expect(element(by.id('StatBar_content_Box_1'))).toBeVisible();
    await expect(element(by.text('Happy'))).toBeVisible();
    await expect(element(by.id('StatBar_happy_Box_2'))).toBeVisible();
  });
});
