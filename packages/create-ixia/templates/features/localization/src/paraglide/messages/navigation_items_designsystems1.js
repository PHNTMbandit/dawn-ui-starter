/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Navigation_Items_Designsystems1Inputs */

const en_navigation_items_designsystems1 = /** @type {(inputs: Navigation_Items_Designsystems1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design systems`)
};

const ja_navigation_items_designsystems1 = /** @type {(inputs: Navigation_Items_Designsystems1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デザインシステム`)
};

/**
* | output |
* | --- |
* | "Design systems" |
*
* @param {Navigation_Items_Designsystems1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_items_designsystems1 = /** @type {((inputs?: Navigation_Items_Designsystems1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Items_Designsystems1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_navigation_items_designsystems1(inputs)
	return en_navigation_items_designsystems1(inputs)
});
export { navigation_items_designsystems1 as "navigation.items.designSystems" }