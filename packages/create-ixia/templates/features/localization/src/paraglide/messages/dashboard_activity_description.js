/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_DescriptionInputs */

const en_dashboard_activity_description = /** @type {(inputs: Dashboard_Activity_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The latest updates across your workspace.`)
};

const ja_dashboard_activity_description = /** @type {(inputs: Dashboard_Activity_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークスペースの最新の更新です。`)
};

/**
* | output |
* | --- |
* | "The latest updates across your workspace." |
*
* @param {Dashboard_Activity_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_description = /** @type {((inputs?: Dashboard_Activity_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_description(inputs)
	return en_dashboard_activity_description(inputs)
});
export { dashboard_activity_description as "dashboard.activity.description" }