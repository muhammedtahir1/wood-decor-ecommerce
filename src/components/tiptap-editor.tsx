'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { Button } from "@/components/ui/button"
import { Bold, Heading2, Heading3, List, Underline as UnderlineIcon } from 'lucide-react'

const TiptapEditor = ({ content, onChange }: { content: string, onChange: (content: string) => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: content === '' ? `
    
    
    
    ` : content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })



  if (!editor) {
    return null
  }

  const handleButtonClick = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault()
    action()
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-muted p-2 flex gap-2 border-b">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleBold().run())}
          className={editor.isActive('bold') ? 'bg-muted-foreground text-muted' : ''}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleUnderline().run())}
          className={editor.isActive('underline') ? 'bg-muted-foreground text-muted' : ''}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>
        {/* <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleHeading({ level: 2 }).run())}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-muted-foreground text-muted' : ''}
        >
          <Heading2 className="h-4 w-4" />
        </Button> */}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleHeading({ level: 3 }).run())}
          className={editor.isActive('heading', { level: 3 }) ? 'bg-muted-foreground text-muted' : ''}
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={(e) => handleButtonClick(e, () => editor.chain().focus().toggleBulletList().run())}
          className={editor.isActive('bulletList') ? 'bg-muted-foreground text-muted ' : ''}
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
      <EditorContent placeholder={``} editor={editor} className="prose max-w-none text-black my-2 mx-1" />
    </div>
  )
}

export default TiptapEditor