import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef } from "react";
import Quill from "quill";

// Get Parchment
const Parchment = Quill.import("parchment");

// Create a style attributor for width and height
const WidthStyle = new Parchment.Attributor.Style("width", "width", {
  scope: Parchment.Scope.INLINE,
});
const HeightStyle = new Parchment.Attributor.Style("height", "height", {
  scope: Parchment.Scope.INLINE,
});

// Register the attributors
Quill.register(WidthStyle, true);
Quill.register(HeightStyle, true);

const Editor = ({ content, onChange }) => {
  const quillRef = useRef(null);

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "code-block"],
      ],
      clipboard: { matchVisual: false },
    }),
    []
  );

  const applyImageWidth = (widthValue) => {
    const quill = quillRef.current?.getEditor?.();
    if (!quill) return;
    const range = quill.getSelection(true);
    if (!range) return;
    quill.format("width", widthValue);
  };

  return (
    <>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={onChange}
        modules={modules}
        placeholder="Start writing here..."
        className="quill-wrapper"
        style={{ height: 330 }}
      />
      <div className="quill-controls flex gap-2 mt-2">
        {["25%", "50%", "75%", "100%"].map((w) => (
          <button
            key={w}
            type="button"
            className="px-2 py-1 border rounded"
            onClick={() => applyImageWidth(w)}
          >
            {w}
          </button>
        ))}
      </div>
    </>
  );
};

export default Editor;
