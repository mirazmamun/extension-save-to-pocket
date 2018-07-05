module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest/setup/main.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    // Use proxy to mock CSS Modules. Lookups on the styles object will be returned as-is
    // (e.g., styles.foobar === 'foobar')
    '\\.(css|scss|less)$': 'identity-obj-proxy',

    'pocket/common/(.*)': '<rootDir>/src/common/$1',
    'pocket/components/(.*)': '<rootDir>/src/components/$1',
    'pocket/containers/(.*)': '<rootDir>/src/containers/$1',
    'pocket/store/(.*)': '<rootDir>/src/store/$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',

    // Transform file imports into file names
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/setup/fileTransformer.js'
  },
  testMatch: ['<rootDir>/**/**/*.test.js']
}
