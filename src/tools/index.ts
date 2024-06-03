import html from '../assets/index.html';
import * as style from '../assets/style.css';
export function getWebviewContent() {
  console.log('vincent css', style);
  // HTML content of the webview
  return html;
}
