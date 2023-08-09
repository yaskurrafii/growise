import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ rootId, childId, children }) => {
  const target = useRef(document.getElementById(rootId));
  const childrenRef = useRef(document.getElementById(childId));

  useEffect(() => {
    return () => {
      window.requestAnimationFrame(() => {
        if (target.current.childNodes.length === 0) {
          childrenRef.current.remove();
          childrenRef.current = null;
        }
      });
    };
  }, [rootId]);

  return createPortal(children, document.body);
};

export default Portal;
