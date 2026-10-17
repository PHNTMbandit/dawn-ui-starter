/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Database_DescriptionInputs */

const en_site_features_database_description = /** @type {(inputs: Site_Features_Database_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drizzle ORM with Neon Postgres gives you type-safe, serverless data access.`)
};

const ja_site_features_database_description = /** @type {(inputs: Site_Features_Database_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drizzle ORM と Neon Postgres で、型安全なサーバーレスデータアクセスを実現します。`)
};

/**
* | output |
* | --- |
* | "Drizzle ORM with Neon Postgres gives you type-safe, serverless data access." |
*
* @param {Site_Features_Database_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_database_description = /** @type {((inputs?: Site_Features_Database_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Database_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_database_description(inputs)
	return en_site_features_database_description(inputs)
});
export { site_features_database_description as "site.features.database.description" }