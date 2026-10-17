/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stats_ConversionInputs */

const en_dashboard_stats_conversion = /** @type {(inputs: Dashboard_Stats_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversion`)
};

const ja_dashboard_stats_conversion = /** @type {(inputs: Dashboard_Stats_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンバージョン率`)
};

/**
* | output |
* | --- |
* | "Conversion" |
*
* @param {Dashboard_Stats_ConversionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_stats_conversion = /** @type {((inputs?: Dashboard_Stats_ConversionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stats_ConversionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_stats_conversion(inputs)
	return en_dashboard_stats_conversion(inputs)
});
export { dashboard_stats_conversion as "dashboard.stats.conversion" }