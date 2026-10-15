/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Ixiaui_Title1Inputs */

const en_site_features_ixiaui_title1 = /** @type {(inputs: Site_Features_Ixiaui_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ixia UI included`)
};

const ja_site_features_ixiaui_title1 = /** @type {(inputs: Site_Features_Ixiaui_Title1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ixia UI を搭載`)
};

/**
* | output |
* | --- |
* | "Ixia UI included" |
*
* @param {Site_Features_Ixiaui_Title1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_ixiaui_title1 = /** @type {((inputs?: Site_Features_Ixiaui_Title1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Ixiaui_Title1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_ixiaui_title1(inputs)
	return en_site_features_ixiaui_title1(inputs)
});
export { site_features_ixiaui_title1 as "site.features.ixiaUi.title" }