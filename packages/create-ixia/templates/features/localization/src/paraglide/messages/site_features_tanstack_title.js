/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Tanstack_TitleInputs */

const en_site_features_tanstack_title = /** @type {(inputs: Site_Features_Tanstack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TanStack suite`)
};

const ja_site_features_tanstack_title = /** @type {(inputs: Site_Features_Tanstack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TanStack スイート`)
};

/**
* | output |
* | --- |
* | "TanStack suite" |
*
* @param {Site_Features_Tanstack_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_tanstack_title = /** @type {((inputs?: Site_Features_Tanstack_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Tanstack_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_tanstack_title(inputs)
	return en_site_features_tanstack_title(inputs)
});
export { site_features_tanstack_title as "site.features.tanstack.title" }