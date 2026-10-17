/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Tanstack_DescriptionInputs */

const en_site_features_tanstack_description = /** @type {(inputs: Site_Features_Tanstack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start, Router, Query, Form, and Table deliver type-safe routing, data, and forms end to end.`)
};

const ja_site_features_tanstack_description = /** @type {(inputs: Site_Features_Tanstack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start・Router・Query・Form・Table により、型安全なルーティング、データ、フォームを一貫して実現します。`)
};

/**
* | output |
* | --- |
* | "Start, Router, Query, Form, and Table deliver type-safe routing, data, and forms end to end." |
*
* @param {Site_Features_Tanstack_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_tanstack_description = /** @type {((inputs?: Site_Features_Tanstack_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Tanstack_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_tanstack_description(inputs)
	return en_site_features_tanstack_description(inputs)
});
export { site_features_tanstack_description as "site.features.tanstack.description" }