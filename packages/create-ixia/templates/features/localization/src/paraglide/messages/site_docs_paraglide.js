/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_ParaglideInputs */

const en_site_docs_paraglide = /** @type {(inputs: Site_Docs_ParaglideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paraglide JS docs`)
};

const ja_site_docs_paraglide = /** @type {(inputs: Site_Docs_ParaglideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paraglide JS ドキュメント`)
};

/**
* | output |
* | --- |
* | "Paraglide JS docs" |
*
* @param {Site_Docs_ParaglideInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_paraglide = /** @type {((inputs?: Site_Docs_ParaglideInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_ParaglideInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_paraglide(inputs)
	return en_site_docs_paraglide(inputs)
});
export { site_docs_paraglide as "site.docs.paraglide" }