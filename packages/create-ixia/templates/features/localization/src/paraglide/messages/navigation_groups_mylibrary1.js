/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Navigation_Groups_Mylibrary1Inputs */

const en_navigation_groups_mylibrary1 = /** @type {(inputs: Navigation_Groups_Mylibrary1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My library`)
};

const ja_navigation_groups_mylibrary1 = /** @type {(inputs: Navigation_Groups_Mylibrary1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マイライブラリ`)
};

/**
* | output |
* | --- |
* | "My library" |
*
* @param {Navigation_Groups_Mylibrary1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_groups_mylibrary1 = /** @type {((inputs?: Navigation_Groups_Mylibrary1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Groups_Mylibrary1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_navigation_groups_mylibrary1(inputs)
	return en_navigation_groups_mylibrary1(inputs)
});
export { navigation_groups_mylibrary1 as "navigation.groups.myLibrary" }