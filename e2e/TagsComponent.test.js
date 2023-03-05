describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should display the Home Page ', async () => {
    await expect(element(by.text('Home Screen'))).toBeVisible();
  });

  it('should Go to Tags ', async () => {
    await element(by.id('go-to-tags')).tap();

    await expect(element(by.id('tags-component'))).toBeVisible();
  });

  it('should add one single tag  ', async () => {
    // Enter the tag name
    const input = await element(by.id('tag-creation-input'));
    await input.typeText('test');

    // Validate the tag name
    const validationButton = await element(by.id('add-tag-button'));
    await validationButton.tap();

    // Check if the list is displayed
    const list = await element(by.id('tags-list'));
    await expect(list).toBeVisible();

    // Check if the tag is displayed
    const newTag = await element(by.id('tag-component-test'));
    await expect(newTag).toBeVisible();
  });

  it('should remove a tag  ', async () => {
    // Find the remove button
    const removeButton = await element(
      by.id('remove-tag').withAncestor(by.id('tag-component-test')),
    );

    // Remove the tag
    await removeButton.tap();

    // Check if the tag is not displayed
    const tagText = await element(by.id('tag-component-test'));
    await expect(tagText).not.toBeVisible();
  });
});
