// 置き換える特殊文字のペア
const REPLACE_PAIRS = {
	'&': '&amp;',
	"'": '&#x27;',
	'`': '&#x60;',
	'"': '&quot;',
	'<': '&lt;',
	'>': '&gt;'
};

// 正規表現パターン
const PATTERN = '[\\' + Object.keys(REPLACE_PAIRS).join('\\') + ']';

export default function escapeHtml(html) {
	const reg = new RegExp(PATTERN, 'g');
	return html?.replace(reg, x => REPLACE_PAIRS[x]);
}