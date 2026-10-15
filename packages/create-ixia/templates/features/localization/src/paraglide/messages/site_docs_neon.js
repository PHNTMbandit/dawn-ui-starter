/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_NeonInputs */

const en_site_docs_neon = /** @type {(inputs: Site_Docs_NeonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neon docs`)
};

const ja_site_docs_neon = /** @type {(inputs: Site_Docs_NeonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neon ドキュメント`)
};

/**
* | output |
* | --- |
* | "Neon docs" |
*
* @param {Site_Docs_NeonInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_neon = /** @type {((inputs?: Site_Docs_NeonInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_NeonInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_neon(inputs)
	return en_site_docs_neon(inputs)
});
export { site_docs_neon as "site.docs.neon" }