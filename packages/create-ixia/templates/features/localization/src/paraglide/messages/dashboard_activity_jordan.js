/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_JordanInputs */

const en_dashboard_activity_jordan = /** @type {(inputs: Dashboard_Activity_JordanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`updated the billing settings`)
};

const ja_dashboard_activity_jordan = /** @type {(inputs: Dashboard_Activity_JordanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`請求設定を更新しました`)
};

/**
* | output |
* | --- |
* | "updated the billing settings" |
*
* @param {Dashboard_Activity_JordanInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_jordan = /** @type {((inputs?: Dashboard_Activity_JordanInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_JordanInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_jordan(inputs)
	return en_dashboard_activity_jordan(inputs)
});
export { dashboard_activity_jordan as "dashboard.activity.jordan" }