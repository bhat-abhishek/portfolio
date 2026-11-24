"use client";
import React, { useRef } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import { BubbleMenu, FloatingMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Youtube from "@tiptap/extension-youtube";
import { createLowlight, common } from "lowlight";
import {
  IconBold,
  IconItalic,
  IconCode,
  IconH2,
  IconH3,
  IconQuote,
  IconLink,
  IconPlus,
} from "@tabler/icons-react";

import { SlashCommand } from "./editor/slash-command";
import { slashSuggestion } from "./editor/slash-suggestion";
import { Embed } from "./editor/embed";
import { uploadImage } from "./editor/upload-image";
import "@/styles/post-content.css";

const lowlight = createLowlight(common);

type Props = {
  value: string;
  onChange: (html: string) => void;
  onEmptyChange?: (empty: boolean) => void;
};

const btn = (active: boolean) =>
  `flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
    active ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
  }`;

const RichTextEditor = ({ value, onChange, onEmptyChange }: Props) => {
  const editorRef = useRef<Editor | null>(null);

  const insertImageFile = (file: File) => {
    uploadImage(file)
      .then((url) => editorRef.current?.chain().focus().setImage({ src: url }).run())
      .catch((e) => alert(e instanceof Error ? e.message : "Upload failed."));
  };

  const editor = useEditor({
    immediatelyRender: false,
    content: value, // initial only
    extensions: [
      StarterKit.configure({ codeBlock: false, link: false }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
      }),
      Image.configure({ inline: false }),
      Placeholder.configure({ placeholder: "Write your story…" }),
      CodeBlockLowlight.configure({ lowlight }),
      Youtube.configure({ nocookie: true, controls: true }),
      Embed,
      SlashCommand.configure({ suggestion: slashSuggestion }),
    ],
    editorProps: {
      attributes: { class: "post-content focus:outline-none min-h-[420px]" },
      handlePaste: (_view, event) => {
        const img = Array.from(event.clipboardData?.files ?? []).find((f) =>
          f.type.startsWith("image/")
        );
        if (!img) return false;
        event.preventDefault();
        insertImageFile(img);
        return true;
      },
      handleDrop: (_view, event) => {
        const dt = (event as DragEvent).dataTransfer;
        const img = Array.from(dt?.files ?? []).find((f) => f.type.startsWith("image/"));
        if (!img) return false;
        event.preventDefault();
        insertImageFile(img);
        return true;
      },
    },
    onCreate: ({ editor }) => {
      editorRef.current = editor;
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      onEmptyChange?.(editor.isEmpty);
    },
  });

  const setLink = () => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  if (!editor) return <div className="min-h-[420px]" />;

  return (
    <div className="rounded-xl border border-border bg-card px-5 py-4 shadow-soft">
      <BubbleMenu
        editor={editor}
        shouldShow={({ editor, state }) =>
          !state.selection.empty && !editor.isActive("codeBlock")
        }
      >
        <div className="flex items-center gap-1 rounded-lg border border-border bg-popover p-1 shadow-lift">
          <button type="button" className={btn(editor.isActive("bold"))} onClick={() => editor.chain().focus().toggleBold().run()}>
            <IconBold className="h-4 w-4" />
          </button>
          <button type="button" className={btn(editor.isActive("italic"))} onClick={() => editor.chain().focus().toggleItalic().run()}>
            <IconItalic className="h-4 w-4" />
          </button>
          <button type="button" className={btn(editor.isActive("code"))} onClick={() => editor.chain().focus().toggleCode().run()}>
            <IconCode className="h-4 w-4" />
          </button>
          <span className="mx-0.5 h-5 w-px bg-border" />
          <button type="button" className={btn(editor.isActive("heading", { level: 2 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            <IconH2 className="h-4 w-4" />
          </button>
          <button type="button" className={btn(editor.isActive("heading", { level: 3 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
            <IconH3 className="h-4 w-4" />
          </button>
          <button type="button" className={btn(editor.isActive("blockquote"))} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
            <IconQuote className="h-4 w-4" />
          </button>
          <span className="mx-0.5 h-5 w-px bg-border" />
          <button type="button" className={btn(editor.isActive("link"))} onClick={setLink}>
            <IconLink className="h-4 w-4" />
          </button>
        </div>
      </BubbleMenu>

      <FloatingMenu
        editor={editor}
        shouldShow={({ editor, state }) => {
          const { $from } = state.selection;
          return editor.isActive("paragraph") && $from.parent.content.size === 0;
        }}
      >
        <button
          type="button"
          title="Insert (or type /)"
          onClick={() => editor.chain().focus().insertContent("/").run()}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-soft transition-colors hover:border-accent hover:text-accent"
        >
          <IconPlus className="h-4 w-4" />
        </button>
      </FloatingMenu>

      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
