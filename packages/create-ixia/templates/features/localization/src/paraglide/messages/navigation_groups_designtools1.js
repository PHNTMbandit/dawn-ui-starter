/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Navigation_Groups_Designtools1Inputs */

const en_navigation_groups_designtools1 = /** @type {(inputs: Navigation_Groups_Designtools1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design tools`)
};

const ja_navigation_groups_designtools1 = /** @type {(inputs: Navigation_Groups_Designtools1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デザインツール`)
};

/**
* | output |
* | --- |
* | "Design tools" |
*
* @param {Navigation_Groups_Designtools1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const navigation_groups_designtools1 = /** @type {((inputs?: Navigation_Groups_Designtools1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Navigation_Groups_Designtools1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_navigation_groups_designtools1(inputs)
	return en_navigation_groups_designtools1(inputs)
});
export { navigation_groups_designtools1 as "navigation.groups.designTools" }