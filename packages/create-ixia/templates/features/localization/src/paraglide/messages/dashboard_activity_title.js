/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_TitleInputs */

const en_dashboard_activity_title = /** @type {(inputs: Dashboard_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent activity`)
};

const ja_dashboard_activity_title = /** @type {(inputs: Dashboard_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近のアクティビティ`)
};

/**
* | output |
* | --- |
* | "Recent activity" |
*
* @param {Dashboard_Activity_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_title = /** @type {((inputs?: Dashboard_Activity_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_title(inputs)
	return en_dashboard_activity_title(inputs)
});
export { dashboard_activity_title as "dashboard.activity.title" }