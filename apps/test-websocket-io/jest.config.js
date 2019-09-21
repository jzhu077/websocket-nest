module.exports = {
  name: 'test-websocket-io',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-websocket-io',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
