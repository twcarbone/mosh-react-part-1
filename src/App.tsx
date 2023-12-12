import { useState } from "react";

import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sagittis quis velit et semper. Nullam nec libero aliquam, bibendum elit
        non, varius sapien. Sed malesuada vitae dolor ac suscipit. Quisque non
        varius leo. Ut viverra finibus sem, ac feugiat tortor. Nam ac mauris
        eget massa rutrum feugiat. Ut efficitur dui eget velit maximus, nec
        commodo libero dignissim. In ut finibus libero. Morbi ipsum erat,
        convallis non ligula vel, laoreet convallis lectus. Nullam in nisl quis
        nulla molestie vulputate. Sed lacinia pretium metus. Quisque facilisis
        semper gravida. Cras in metus tincidunt, convallis augue a, aliquet
        felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ExpandableText>
    </div>
  );
}

export default App;
