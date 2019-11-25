module.exports = {
  plugins: [
    'import',
  ],
  rules: {},
  overrides: [{
    files: {
      tests: [
        'test/**',
        '**/*.test.*',
        '**/*.spec.*',
      ],
      configs: [
        '**/config/**',
        '**/configuration/**',
      ],
      javascripts: [
        '*.js',
        '.*.js',
      ],
      typescripts: [
        '*.ts',
        '.*.ts',
        '*.tsx',
        '.*.tsx',
      ],
    },
  }],
}
