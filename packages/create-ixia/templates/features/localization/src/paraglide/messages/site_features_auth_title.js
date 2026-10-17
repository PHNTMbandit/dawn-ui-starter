/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Auth_TitleInputs */

const en_site_features_auth_title = /** @type {(inputs: Site_Features_Auth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authentication built in`)
};

const ja_site_features_auth_title = /** @type {(inputs: Site_Features_Auth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証を組み込み済み`)
};

/**
* | output |
* | --- |
* | "Authentication built in" |
*
* @param {Site_Features_Auth_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_auth_title = /** @type {((inputs?: Site_Features_Auth_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Auth_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_auth_title(inputs)
	return en_site_features_auth_title(inputs)
});
export { site_features_auth_title as "site.features.auth.title" }