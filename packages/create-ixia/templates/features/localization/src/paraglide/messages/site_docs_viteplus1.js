/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_Viteplus1Inputs */

const en_site_docs_viteplus1 = /** @type {(inputs: Site_Docs_Viteplus1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vite+ docs`)
};

const ja_site_docs_viteplus1 = /** @type {(inputs: Site_Docs_Viteplus1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vite+ ドキュメント`)
};

/**
* | output |
* | --- |
* | "Vite+ docs" |
*
* @param {Site_Docs_Viteplus1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_viteplus1 = /** @type {((inputs?: Site_Docs_Viteplus1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Viteplus1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_viteplus1(inputs)
	return en_site_docs_viteplus1(inputs)
});
export { site_docs_viteplus1 as "site.docs.vitePlus" }