/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Database_TitleInputs */

const en_site_features_database_title = /** @type {(inputs: Site_Features_Database_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type-safe database`)
};

const ja_site_features_database_title = /** @type {(inputs: Site_Features_Database_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`型安全なデータベース`)
};

/**
* | output |
* | --- |
* | "Type-safe database" |
*
* @param {Site_Features_Database_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_database_title = /** @type {((inputs?: Site_Features_Database_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Database_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_database_title(inputs)
	return en_site_features_database_title(inputs)
});
export { site_features_database_title as "site.features.database.title" }