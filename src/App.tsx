import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // 'afterRender' would be a better name...
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  // each 'useEffect' is run in order after the component is rendered
  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
