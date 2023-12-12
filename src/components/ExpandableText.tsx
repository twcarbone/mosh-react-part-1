import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

function ExpandableText({ maxChars = 100, children }: Props) {
  const [isExpanded, setExpanded] = useState(children.length <= maxChars);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  function handleClick() {
    setExpanded(!isExpanded);
  }

  return (
    <>
      <p>{text}</p>
      <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
    </>
  );
}

export default ExpandableText;
