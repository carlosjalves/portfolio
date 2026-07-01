import { useRef } from "react";
import { useTheme } from "@mui/material";
import { gsap } from "gsap";

function CustomLink({
  to,
  children,
  external = false,
  showIcon = true,
  icon: Icon = null,
  onClick = null,
  onNavigate = null, // 👈 NOVO
  sx = {},
  textSx = {}
}) {
  const theme = useTheme();
  const wrapperRef = useRef(null);
  const animRef = useRef(null);

  const baseStyles = {
    display: "inline-block",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.background,
    ...sx
  };

  const handleEnter = () => {
    if (!wrapperRef.current) return;

    const [normal, bold] =
      wrapperRef.current.querySelectorAll(".text-layer");

    animRef.current?.kill();

    const tl = gsap.timeline();

    tl.to(normal, {
      y: "-102%",
      duration: 0.35,
      ease: "power3.out"
    }, 0);

    tl.to(bold, {
      y: "-102%",
      duration: 0.35,
      ease: "power3.out"
    }, 0);
  };

  const handleLeave = () => {
    if (!wrapperRef.current) return;

    const [normal, bold] =
      wrapperRef.current.querySelectorAll(".text-layer");

    gsap.to([normal, bold], {
      y: 0,
      duration: 0.3,
      ease: "power3.inOut"
    });
  };

  const handleClick = (e) => {
    // prioridade: transição de página
    if (!external && onNavigate && to) {
      e.preventDefault();
      onNavigate(to);
      return;
    }

    // 👉 fallback normal
    if (onClick) {
      //e.preventDefault();
      onClick(e);
    }
  };

  const TextBlock = (
    <h6
      ref={wrapperRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        margin: 0,
        display: "inline-flex",
        overflow: "hidden",
        position: "relative",
        lineHeight: 1.3,
        ...textSx
      }}
    >
      <span className="text-layer">
        {children}
        {showIcon && Icon && (
          <Icon sx={{ fontSize: "18px", ml: "3px", mt: "-1px", verticalAlign: "middle" }} />
        )}
      </span>

      <span
        className="text-layer"
        style={{
          position: "absolute",
          top: "100%",
          left: 0
        }}
      >
        {children}
        {showIcon && Icon && (
          <Icon sx={{ fontSize: "18px", ml: "3px", mt: "-1px", verticalAlign: "middle" }} />
        )}
      </span>
    </h6>
  );

  const content = <span style={baseStyles}>{TextBlock}</span>;

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        style={{ width: "fit-content" }}
      >
        {content}
      </a>
    );
  }

  if (!to && onClick) {
    return (
      <span onClick={handleClick} style={{ cursor: "pointer", width: "fit-content" }}>
        {content}
      </span>
    );
  }

  return (
    /* <RouterLink to={to} onClick={handleClick}>
       {content}
     </RouterLink>*/
    <a href={to} onClick={handleClick} style={{ width: "fit-content" }}>{content}</a>
  );
}

export default CustomLink;
