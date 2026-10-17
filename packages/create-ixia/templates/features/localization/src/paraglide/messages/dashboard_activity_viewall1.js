/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_Viewall1Inputs */

const en_dashboard_activity_viewall1 = /** @type {(inputs: Dashboard_Activity_Viewall1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View full activity log`)
};

const ja_dashboard_activity_viewall1 = /** @type {(inputs: Dashboard_Activity_Viewall1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのアクティビティを見る`)
};

/**
* | output |
* | --- |
* | "View full activity log" |
*
* @param {Dashboard_Activity_Viewall1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_viewall1 = /** @type {((inputs?: Dashboard_Activity_Viewall1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_Viewall1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_viewall1(inputs)
	return en_dashboard_activity_viewall1(inputs)
});
export { dashboard_activity_viewall1 as "dashboard.activity.viewAll" }