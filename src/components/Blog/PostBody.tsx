import sanitizeHtml from "sanitize-html";
import "highlight.js/styles/github-dark.css";
import "@/styles/post-content.css";

// Pure-Node sanitizer (no jsdom). The allowedIframeHostnames option is the real
// security boundary for embeds — iframes from any other host are stripped.
const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "p", "br", "hr", "blockquote",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "strong", "em", "s", "del", "code", "pre", "span",
    "a", "ul", "ol", "li",
    "img", "figure", "figcaption", "div", "iframe",
    "table", "thead", "tbody", "tr", "th", "td",
  ],
  allowedAttributes: {
    "*": ["class"],
    a: ["href", "target", "rel"],
    img: ["src", "alt", "title"],
    div: ["data-embed", "data-youtube-video"],
    iframe: ["src", "allow", "allowfullscreen", "frameborder", "loading", "width", "height"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedIframeHostnames: [
    "www.youtube-nocookie.com",
    "www.youtube.com",
    "youtube.com",
    "player.vimeo.com",
    "platform.twitter.com",
  ],
};

const PostBody = ({ html }: { html: string }) => {
  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(html, OPTIONS) }}
    />
  );
};

export default PostBody;
