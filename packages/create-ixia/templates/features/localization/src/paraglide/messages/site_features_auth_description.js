/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Auth_DescriptionInputs */

const en_site_features_auth_description = /** @type {(inputs: Site_Features_Auth_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Better Auth handles sessions, usernames, and protected routes securely.`)
};

const ja_site_features_auth_description = /** @type {(inputs: Site_Features_Auth_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Better Auth がセッション、ユーザー名、保護されたルートを安全に管理します。`)
};

/**
* | output |
* | --- |
* | "Better Auth handles sessions, usernames, and protected routes securely." |
*
* @param {Site_Features_Auth_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_auth_description = /** @type {((inputs?: Site_Features_Auth_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Auth_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_auth_description(inputs)
	return en_site_features_auth_description(inputs)
});
export { site_features_auth_description as "site.features.auth.description" }