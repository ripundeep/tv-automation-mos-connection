module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
			diagnostics: false
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: [
		'**/__tests__/**/*.(spec|test).(ts|js)'
	],
	testPathIgnorePatterns: [
		'integrationTests'
	],	
	testEnvironment: 'node',
	coverageThreshold: {
		global: {
		  branches: 0,
		  functions: 0,
		  lines: 0,
		  statements: 0
		}
	},
	coverageDirectory: "./coverage/",
	collectCoverage: true
}
