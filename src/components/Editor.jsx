import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef, useEffect } from "react";
import Quill from "quill";

const Editor = ({ content, onChange }) => {
  const quillRef = useRef(null);

  useEffect(() => {
    try {
      // Enable width/height style formats on images
      const WidthStyle = Quill.import("attributors/style/width");
      const HeightStyle = Quill.import("attributors/style/height");
      Quill.register(WidthStyle, true);
      Quill.register(HeightStyle, true);
    } catch (_) {
      // ignore if already registered
    }
  }, []);

  const modules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "code-block"],
    ],
    clipboard: { matchVisual: false },
  }), []);

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
        style={{ height: 320 }}
      />
      <div className="quill-controls">
        <button type="button" className="px-2 py-1 border" onClick={() => applyImageWidth("25%")}>25%</button>
        <button type="button" className="px-2 py-1 border" onClick={() => applyImageWidth("50%")}>50%</button>
        <button type="button" className="px-2 py-1 border" onClick={() => applyImageWidth("75%")}>75%</button>
        <button type="button" className="px-2 py-1 border" onClick={() => applyImageWidth("100%")}>100%</button>
      </div>
    </>
  );

  function applyImageWidth(widthValue) {
    const quill = quillRef.current?.getEditor?.();
    if (!quill) return;
    const range = quill.getSelection(true);
    if (!range) return;
    // Apply width style at current selection; if an image is selected, Quill applies to it
    quill.format("width", widthValue);
  }
};

export default Editor;