/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Cicd_TitleInputs */

const en_site_features_cicd_title = /** @type {(inputs: Site_Features_Cicd_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CI/CD included`)
};

const ja_site_features_cicd_title = /** @type {(inputs: Site_Features_Cicd_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CI/CD を同梱`)
};

/**
* | output |
* | --- |
* | "CI/CD included" |
*
* @param {Site_Features_Cicd_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_cicd_title = /** @type {((inputs?: Site_Features_Cicd_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Cicd_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_cicd_title(inputs)
	return en_site_features_cicd_title(inputs)
});
export { site_features_cicd_title as "site.features.cicd.title" }