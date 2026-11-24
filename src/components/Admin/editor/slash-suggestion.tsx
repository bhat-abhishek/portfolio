import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import type { Editor, Range } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import type { SuggestionOptions } from "@tiptap/suggestion";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import {
  IconH2,
  IconH3,
  IconList,
  IconListNumbers,
  IconQuote,
  IconCode,
  IconPhoto,
  IconMinus,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { uploadImage } from "./upload-image";

type SlashItem = {
  title: string;
  description: string;
  searchTerms: string[];
  icon: React.ReactNode;
  command: (props: { editor: Editor; range: Range }) => void;
};

function pickAndInsertImage(editor: Editor) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/png,image/jpeg,image/webp";
  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      const url = await uploadImage(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Upload failed.");
    }
  };
  input.click();
}

function insertEmbed(editor: Editor) {
  const url = window.prompt(
    "Paste a URL to embed (YouTube fully supported; other URLs embed as an iframe):"
  );
  if (!url) return;
  const isYouTube = /(?:youtube\.com|youtu\.be)/i.test(url);
  if (isYouTube) {
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  } else {
    editor.chain().focus().setEmbed({ src: url }).run();
  }
}

const ICON = "h-4 w-4";

const ITEMS: SlashItem[] = [
  {
    title: "Heading 2",
    description: "Section heading",
    searchTerms: ["h2", "heading", "title"],
    icon: <IconH2 className={ICON} />,
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run(),
  },
  {
    title: "Heading 3",
    description: "Sub-heading",
    searchTerms: ["h3", "subheading"],
    icon: <IconH3 className={ICON} />,
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run(),
  },
  {
    title: "Bullet list",
    description: "Unordered list",
    searchTerms: ["ul", "bullet", "list"],
    icon: <IconList className={ICON} />,
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleBulletList().run(),
  },
  {
    title: "Numbered list",
    description: "Ordered list",
    searchTerms: ["ol", "numbered", "ordered"],
    icon: <IconListNumbers className={ICON} />,
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
  },
  {
    title: "Quote",
    description: "Blockquote",
    searchTerms: ["quote", "blockquote"],
    icon: <IconQuote className={ICON} />,
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
  },
  {
    title: "Code block",
    description: "Syntax-highlighted code",
    searchTerms: ["code", "pre", "snippet"],
    icon: <IconCode className={ICON} />,
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
  },
  {
    title: "Divider",
    description: "Horizontal rule",
    searchTerms: ["hr", "divider", "rule", "line"],
    icon: <IconMinus className={ICON} />,
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
  },
  {
    title: "Image",
    description: "Upload an image",
    searchTerms: ["image", "photo", "picture", "img"],
    icon: <IconPhoto className={ICON} />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).run();
      pickAndInsertImage(editor);
    },
  },
  {
    title: "Embed",
    description: "YouTube or other URL",
    searchTerms: ["embed", "youtube", "video", "iframe"],
    icon: <IconBrandYoutube className={ICON} />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).run();
      insertEmbed(editor);
    },
  },
];

type ListProps = {
  items: SlashItem[];
  command: (item: SlashItem) => void;
};

export type SlashMenuRef = {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean;
};

const SlashMenuList = forwardRef<SlashMenuRef, ListProps>((props, ref) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => setSelected(0), [props.items]);

  const select = (index: number) => {
    const item = props.items[index];
    if (item) props.command(item);
  };

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        setSelected((s) => (s + props.items.length - 1) % props.items.length);
        return true;
      }
      if (event.key === "ArrowDown") {
        setSelected((s) => (s + 1) % props.items.length);
        return true;
      }
      if (event.key === "Enter") {
        select(selected);
        return true;
      }
      return false;
    },
  }));

  if (props.items.length === 0) return null;

  return (
    <div className="w-64 overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lift">
      {props.items.map((item, index) => (
        <button
          key={item.title}
          type="button"
          onMouseEnter={() => setSelected(index)}
          onClick={() => select(index)}
          className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors ${
            index === selected ? "bg-accent/15 text-foreground" : "text-muted-foreground"
          }`}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-card text-foreground">
            {item.icon}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-foreground">{item.title}</span>
            <span className="block truncate text-xs text-muted-foreground">
              {item.description}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
});
SlashMenuList.displayName = "SlashMenuList";

// Complete suggestion config passed to SlashCommand.configure({ suggestion }).
export const slashSuggestion: Partial<SuggestionOptions<SlashItem>> = {
  char: "/",
  startOfLine: false,

  items: ({ query }) => {
    const q = query.toLowerCase();
    return ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.searchTerms.some((t) => t.includes(q))
    );
  },

  command: ({ editor, range, props }) => {
    props.command({ editor, range });
  },

  render: () => {
    let component: ReactRenderer<SlashMenuRef, ListProps>;
    let el: HTMLDivElement | null = null;

    const position = (rect: (() => DOMRect | null) | null | undefined) => {
      if (!rect || !el) return;
      const reference = {
        getBoundingClientRect: () => rect() ?? new DOMRect(),
      };
      computePosition(reference, el, {
        placement: "bottom-start",
        middleware: [offset(8), flip(), shift({ padding: 8 })],
      }).then(({ x, y }) => {
        if (el) Object.assign(el.style, { left: `${x}px`, top: `${y}px` });
      });
    };

    return {
      onStart: (props) => {
        component = new ReactRenderer(SlashMenuList, {
          props,
          editor: props.editor,
        });
        el = document.createElement("div");
        el.style.position = "absolute";
        el.style.top = "0";
        el.style.left = "0";
        el.style.zIndex = "60";
        el.appendChild(component.element);
        document.body.appendChild(el);
        position(props.clientRect);
      },
      onUpdate: (props) => {
        component.updateProps(props);
        position(props.clientRect);
      },
      onKeyDown: (props) => {
        if (props.event.key === "Escape") {
          el?.remove();
          el = null;
          return true;
        }
        return component.ref?.onKeyDown(props) ?? false;
      },
      onExit: () => {
        el?.remove();
        el = null;
        component?.destroy();
      },
    };
  },
};
