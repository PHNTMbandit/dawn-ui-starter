/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Navigation_Items_SpacingInputs */

const en_navigation_items_spacing = /** @type {(inputs: Navigation_Items_SpacingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spacing`)
};

const ja_navigation_items_spacing = /** @type {(inputs: Navigation_Items_SpacingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スペーシング`)
};

/**
* | output |
* | --- |
* | "Spacing" |
*
* @param {Navigation_Items_SpacingInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_spacing = /** @type {((inputs?: Navigation_Items_SpacingInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_SpacingInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_navigation_items_spacing(inputs)
	return en_navigation_items_spacing(inputs)
});
export { navigation_items_spacing as "navigation.items.spacing" }