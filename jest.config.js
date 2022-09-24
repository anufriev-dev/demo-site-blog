
// jest.config.js
const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // Укажите путь к вашему приложению Next.js для загрузки файлов next.config.js и .env в вашей тестовой среде
  dir: "./",
})

// Добавьте любую пользовательскую конфигурацию для передачи в Jest.
const customJestConfig = {
  // Добавьте дополнительные параметры настройки перед запуском каждого теста.
  // настроить файлы после Env: ['<rootDir>/jest.setup.js'],
   // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules","<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
}

// create JestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)