/* eslint-env node */
module.exports = {
  normalizeEntityName() {},

  afterInstall(options) {
    return this.addAddonToProject({
      name: 'ember-popper',
      target: '^0.0.3',
      blueprintOptions: {
        save: options.save
      }
    });
  }
};
