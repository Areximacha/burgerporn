const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  "extends": "standard",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": ERROR,
    "react/jsx-uses-vars": ERROR
  }
}
