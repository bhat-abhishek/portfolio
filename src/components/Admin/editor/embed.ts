import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    embed: {
      setEmbed: (options: { src: string }) => ReturnType;
    };
  }
}

// Generic responsive-iframe embed (for non-YouTube URLs). YouTube uses the
// dedicated @tiptap/extension-youtube node instead.
export const Embed = Node.create({
  name: "embed",
  group: "block",
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      src: { default: null },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-embed] iframe",
        getAttrs: (el) => ({ src: (el as HTMLElement).getAttribute("src") }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      { "data-embed": "", class: "embed" },
      [
        "iframe",
        mergeAttributes(HTMLAttributes, {
          frameborder: "0",
          allowfullscreen: "true",
          loading: "lazy",
        }),
      ],
    ];
  },

  addCommands() {
    return {
      setEmbed:
        ({ src }) =>
        ({ commands }) =>
          commands.insertContent({ type: this.name, attrs: { src } }),
    };
  },
});
