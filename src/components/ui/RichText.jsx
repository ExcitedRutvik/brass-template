import { Link } from 'react-router-dom';

// Parses markdown-style [label](/path) links in a string into React nodes.
// Internal paths (starting with /) become React Router Links.
export default function RichText({ text }) {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    if (href.startsWith('/')) {
      parts.push(<Link key={key++} to={href} className="rich-link">{label}</Link>);
    } else {
      parts.push(<a key={key++} href={href} className="rich-link" target="_blank" rel="noopener noreferrer">{label}</a>);
    }
    last = regex.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
