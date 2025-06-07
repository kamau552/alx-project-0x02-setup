import React, { ReactNode } from 'react';

interface PostModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
  isOpen?: boolean;
  onSubmit: (post: {title: string; content: string;}) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, isOpen, onSubmit }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button
            onClick={() => {
              onSubmit({ title, content });
              setTitle("");
              setContent("");
              onClose();
            }}
            className="bg-teal-600 text-white px-4 py-2 rounded"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;