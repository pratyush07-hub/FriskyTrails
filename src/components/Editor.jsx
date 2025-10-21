// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useMemo, useRef } from "react";
// import Quill from "quill";

// // Get Parchment
// const Parchment = Quill.import("parchment");

// // Create a style attributor for width and height
// const WidthStyle = new Parchment.Attributor.Style("width", "width", {
//   scope: Parchment.Scope.INLINE,
// });
// const HeightStyle = new Parchment.Attributor.Style("height", "height", {
//   scope: Parchment.Scope.INLINE,
// });

// // Register the attributors
// Quill.register(WidthStyle, true);
// Quill.register(HeightStyle, true);

// const Editor = ({ content, onChange }) => {
//   const quillRef = useRef(null);

//  const modules = useMemo(
//   () => ({
//     toolbar: {
//       container: [
//         [{ header: [1, 2, false] }],
//         ["bold", "italic", "underline"],
//         [{ list: "ordered" }, { list: "bullet" }],
//         ["link", "image", "code-block"],
//       ],
//       handlers: {
//         image: function () {
//           const input = document.createElement("input");
//           input.setAttribute("type", "file");
//           input.setAttribute("accept", "image/*"); // allows webp too
//           input.click();

//           input.onchange = async () => {
//             const file = input.files[0];
//             if (/^image\//.test(file.type)) {
//               const reader = new FileReader();
//               reader.onload = () => {
//                 const quill = quillRef.current?.getEditor?.();
//                 const range = quill.getSelection();
//                 quill.insertEmbed(range.index, "image", reader.result);
//               };
//               reader.readAsDataURL(file); // supports webp
//             }
//           };
//         },
//       },
//     },
//     clipboard: { matchVisual: false },
//   }),
//   []
// );


//   const applyImageWidth = (widthValue) => {
//     const quill = quillRef.current?.getEditor?.();
//     if (!quill) return;
//     const range = quill.getSelection(true);
//     if (!range) return;
//     quill.format("width", widthValue);
//   };

//   return (
//     <>
//       <ReactQuill
//         ref={quillRef}
//         theme="snow"
//         value={content}
//         onChange={onChange}
//         modules={modules}
//         placeholder="Start writing here..."
//         className="quill-wrapper"
//         style={{ height: 330 }}
//       />
//       <div className="quill-controls flex gap-2 mt-2">
//         {["25%", "50%", "75%", "100%"].map((w) => (
//           <button
//             key={w}
//             type="button"
//             className="px-2 py-1 border rounded"
//             onClick={() => applyImageWidth(w)}
//           >
//             {w}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Editor;


import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef } from "react";
import Quill from "quill";

// ======= PARCHMENT CONFIG =======
const Parchment = Quill.import("parchment");

// Create a style attributor for width and height (used for images)
const WidthStyle = new Parchment.Attributor.Style("width", "width", {
  scope: Parchment.Scope.INLINE,
});
const HeightStyle = new Parchment.Attributor.Style("height", "height", {
  scope: Parchment.Scope.INLINE,
});

// Register custom styles
Quill.register(WidthStyle, true);
Quill.register(HeightStyle, true);

const Editor = ({ content, onChange }) => {
  const quillRef = useRef(null);

  // ✅ Toolbar + custom image upload handler
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }], // added H3 support
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "code-block"],
        ],
        handlers: {
          image: function () {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*"); // supports all image types
            input.click();

            input.onchange = async () => {
              const file = input.files[0];
              if (/^image\//.test(file.type)) {
                const reader = new FileReader();
                reader.onload = () => {
                  const quill = quillRef.current?.getEditor?.();
                  const range = quill.getSelection();
                  quill.insertEmbed(range.index, "image", reader.result);
                };
                reader.readAsDataURL(file);
              }
            };
          },
        },
      },
      clipboard: { matchVisual: false },
    }),
    []
  );

  // ✅ Quill must explicitly allow certain formats to preserve them
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
    "width",
    "height",
  ];

  // ✅ Apply image width adjustment
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
        formats={formats} // ✅ ensures headings and other formats persist
        placeholder="Start writing here..."
        className="quill-wrapper"
        style={{ height: 330 }}
      />

      {/* Image width buttons */}
      <div className="quill-controls flex gap-2 mt-2">
        {["25%", "50%", "75%", "100%"].map((w) => (
          <button
            key={w}
            type="button"
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
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
