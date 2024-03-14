// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const base: CustomThemeConfig = {
	name: 'base',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #7ebfe5
		'--color-primary-50': '236 245 251', // #ecf5fb
		'--color-primary-100': '229 242 250', // #e5f2fa
		'--color-primary-200': '223 239 249', // #dfeff9
		'--color-primary-300': '203 229 245', // #cbe5f5
		'--color-primary-400': '165 210 237', // #a5d2ed
		'--color-primary-500': '126 191 229', // #7ebfe5
		'--color-primary-600': '113 172 206', // #71acce
		'--color-primary-700': '95 143 172', // #5f8fac
		'--color-primary-800': '76 115 137', // #4c7389
		'--color-primary-900': '62 94 112', // #3e5e70
		// secondary | #df9366
		'--color-secondary-50': '250 239 232', // #faefe8
		'--color-secondary-100': '249 233 224', // #f9e9e0
		'--color-secondary-200': '247 228 217', // #f7e4d9
		'--color-secondary-300': '242 212 194', // #f2d4c2
		'--color-secondary-400': '233 179 148', // #e9b394
		'--color-secondary-500': '223 147 102', // #df9366
		'--color-secondary-600': '201 132 92', // #c9845c
		'--color-secondary-700': '167 110 77', // #a76e4d
		'--color-secondary-800': '134 88 61', // #86583d
		'--color-secondary-900': '109 72 50', // #6d4832
		// tertiary | #70e9eb
		'--color-tertiary-50': '234 252 252', // #eafcfc
		'--color-tertiary-100': '226 251 251', // #e2fbfb
		'--color-tertiary-200': '219 250 250', // #dbfafa
		'--color-tertiary-300': '198 246 247', // #c6f6f7
		'--color-tertiary-400': '155 240 241', // #9bf0f1
		'--color-tertiary-500': '112 233 235', // #70e9eb
		'--color-tertiary-600': '101 210 212', // #65d2d4
		'--color-tertiary-700': '84 175 176', // #54afb0
		'--color-tertiary-800': '67 140 141', // #438c8d
		'--color-tertiary-900': '55 114 115', // #377273
		// success | #7fdc93
		'--color-success-50': '236 250 239', // #ecfaef
		'--color-success-100': '229 248 233', // #e5f8e9
		'--color-success-200': '223 246 228', // #dff6e4
		'--color-success-300': '204 241 212', // #ccf1d4
		'--color-success-400': '165 231 179', // #a5e7b3
		'--color-success-500': '127 220 147', // #7fdc93
		'--color-success-600': '114 198 132', // #72c684
		'--color-success-700': '95 165 110', // #5fa56e
		'--color-success-800': '76 132 88', // #4c8458
		'--color-success-900': '62 108 72', // #3e6c48
		// warning | #31d97f
		'--color-warning-50': '224 249 236', // #e0f9ec
		'--color-warning-100': '214 247 229', // #d6f7e5
		'--color-warning-200': '204 246 223', // #ccf6df
		'--color-warning-300': '173 240 204', // #adf0cc
		'--color-warning-400': '111 228 165', // #6fe4a5
		'--color-warning-500': '49 217 127', // #31d97f
		'--color-warning-600': '44 195 114', // #2cc372
		'--color-warning-700': '37 163 95', // #25a35f
		'--color-warning-800': '29 130 76', // #1d824c
		'--color-warning-900': '24 106 62', // #186a3e
		// error | #b81f33
		'--color-error-50': '244 221 224', // #f4dde0
		'--color-error-100': '241 210 214', // #f1d2d6
		'--color-error-200': '237 199 204', // #edc7cc
		'--color-error-300': '227 165 173', // #e3a5ad
		'--color-error-400': '205 98 112', // #cd6270
		'--color-error-500': '184 31 51', // #b81f33
		'--color-error-600': '166 28 46', // #a61c2e
		'--color-error-700': '138 23 38', // #8a1726
		'--color-error-800': '110 19 31', // #6e131f
		'--color-error-900': '90 15 25', // #5a0f19
		// surface | #86a1d1
		'--color-surface-50': '237 241 248', // #edf1f8
		'--color-surface-100': '231 236 246', // #e7ecf6
		'--color-surface-200': '225 232 244', // #e1e8f4
		'--color-surface-300': '207 217 237', // #cfd9ed
		'--color-surface-400': '170 189 223', // #aabddf
		'--color-surface-500': '134 161 209', // #86a1d1
		'--color-surface-600': '121 145 188', // #7991bc
		'--color-surface-700': '101 121 157', // #65799d
		'--color-surface-800': '80 97 125', // #50617d
		'--color-surface-900': '66 79 102' // #424f66
	}
};
