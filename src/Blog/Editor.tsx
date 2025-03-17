import { useMemo, useState } from "react";
import { markdown } from "@yoopta/exports";
import YooptaEditor, {
  createYooptaEditor,
  type YooEditor,
  type YooptaContentValue,
} from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
import Blockquote from "@yoopta/blockquote";
import Code from "@yoopta/code";
import Image from "@yoopta/image";
import Callout from "@yoopta/callout";
import Video from "@yoopta/video";
import { NumberedList, BulletedList, TodoList } from "@yoopta/lists";
import { HeadingOne, HeadingTwo, HeadingThree } from "@yoopta/headings";
import Divider from "@yoopta/divider";
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool";
import ActionMenu, { DefaultActionMenuRender } from "@yoopta/action-menu-list";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";
import {
  Bold,
  Italic,
  CodeMark,
  Underline,
  Strike,
  Highlight,
} from "@yoopta/marks";

const plugins = [
  Paragraph,
  Blockquote,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Callout,
  Image,
  NumberedList,
  BulletedList,
  TodoList,
  Code,
  Divider,
  Video,
];

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

const TOOLS = {
  Toolbar: {
    tool: Toolbar,
    render: DefaultToolbarRender,
  },
  ActionMenu: {
    tool: ActionMenu,
    render: DefaultActionMenuRender,
  },
  LinkTool: {
    tool: LinkTool,
    render: DefaultLinkToolRender,
  },
};

interface EditorProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export const Editor: React.FC<EditorProps> = ({ setContent }) => {
  const editor: YooEditor = useMemo(() => createYooptaEditor(), []);
  const [value, setValue] = useState<YooptaContentValue>();

  const serializedHTML = () => {
    const data = editor.getEditorValue();
    const markdownString = markdown.serialize(editor, data);
    return markdownString;
  };

  const onChange = (value: YooptaContentValue) => {
    setContent(serializedHTML());
    setValue(value);
  };

  return (
    <YooptaEditor
      editor={editor}
      plugins={plugins}
      placeholder="Escribe algo..."
      value={value}
      onChange={onChange}
      tools={TOOLS}
      marks={MARKS}
      className=""
    />
  );
};
