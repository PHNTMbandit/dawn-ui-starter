/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_I18n_TitleInputs */

const en_site_features_i18n_title = /** @type {(inputs: Site_Features_I18n_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Internationalized`)
};

const ja_site_features_i18n_title = /** @type {(inputs: Site_Features_I18n_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多言語対応`)
};

/**
* | output |
* | --- |
* | "Internationalized" |
*
* @param {Site_Features_I18n_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_i18n_title = /** @type {((inputs?: Site_Features_I18n_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_I18n_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_i18n_title(inputs)
	return en_site_features_i18n_title(inputs)
});
export { site_features_i18n_title as "site.features.i18n.title" }