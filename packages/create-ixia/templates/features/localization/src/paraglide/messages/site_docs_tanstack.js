/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_TanstackInputs */

const en_site_docs_tanstack = /** @type {(inputs: Site_Docs_TanstackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TanStack docs`)
};

const ja_site_docs_tanstack = /** @type {(inputs: Site_Docs_TanstackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TanStack ドキュメント`)
};

/**
* | output |
* | --- |
* | "TanStack docs" |
*
* @param {Site_Docs_TanstackInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_tanstack = /** @type {((inputs?: Site_Docs_TanstackInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_TanstackInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_tanstack(inputs)
	return en_site_docs_tanstack(inputs)
});
export { site_docs_tanstack as "site.docs.tanstack" }