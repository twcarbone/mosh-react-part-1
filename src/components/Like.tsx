import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";

interface Props {
  onClick: () => void;
}

const _Heart = css`
  height: 50px;
  width: 50px;
`;

const OutlineHeart = styled(AiOutlineHeart)`
  ${_Heart}
  fill: black;
`;

const FillHeart = styled(AiFillHeart)`
  ${_Heart}
  fill: red;
`;

function Like({ onClick }: Props) {
  const [liked, setLiked] = useState(false);

  function toggle() {
    setLiked(!liked);
    onClick();
  }

  if (liked) return <FillHeart onClick={toggle} />;
  else return <OutlineHeart onClick={toggle} />;
}

export default Like;
